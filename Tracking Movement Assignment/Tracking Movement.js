// This array contains the coordinates for all bus stops between MIT and Harvard
const markers = [
  [175.098572, -38.261894]
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2luY2FpZHR5bGVyIiwiYSI6ImNsNGQwNmd5djAwMnMzaW1vbTZqMjBpbTkifQ.ADKHn30fmEjitEpm5EvCsA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [-110.838244, 44.525114],
  zoom: 15,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker()
  .setLngLat([-110.838244, 44.525114])
  .addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  setTimeout(() => {
    if (counter >= markers.length) return;
    marker.setLngLat(markers[counter]);
    counter++;
    move();
  },1000);
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
}

var newMarker = new mapboxgl.Marker();

function addMmarker (event) {
  var coordinates = event.lngLat;
  console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
  marker.setLngLat(coordinates).addTo(map);
}

map.on('click', addMmarker);

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}