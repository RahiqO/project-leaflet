// We create the tile layer that will be the background of our map
let tilelayer =   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
// We create the map object with options.
let Mymap = L.map("map", {
  center: [37.09024, -95.712891],
  zoom: 4,
  layers: [tilelayer]
});

let earthquake = new L.LayerGroup();
  // Here we make an AJAX call that retrieves our earthquake geoJSON data.

url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

function markerSize(magnitude){
 if (magnitude === 0 ) {
  return 1;
 }
 return magnitude * 4;


}




function circlemarker(data){
  return {
    stroke: false,
    fillOpacity: 0.75,
    color: "green",
    fillColor: "pink",
    radius: markerSize(data.alt)
  } 

}
d3.json(url).then(function(response) {
  let features = response.features;
  // console.log(features)
  L.geoJson(response, {
    pointToLayer: function( feature, latlng) {
      console.log(latlng)
    return L.circleMarker(latlng)
    },
    style: circlemarker

}).addTo(Mymap);
})
 