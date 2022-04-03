// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([39.011902, -98.48424649999998], 5);
// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.1974292, -97.6663058],
    [43.67771760000001, -79.62481969999999],
    [40.6413, -73.7781]
  ];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: "4",
    dashArray: "10, 10",
    opacity: "0.5"
  }).addTo(map);
  
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);