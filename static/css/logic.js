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

function circlemarker(data) {
  var marker = L.circleMarker(data.latlng, {
    stroke: false,
    fillOpacity: 0.75,
    color: "green",
    fillColor: "green",
    radius: markerSize(data.alt)
  })
  var popupContent = "Magnitude: " + data.properties.mag + "<br>Location: " + data.properties.place;
  marker.bindPopup(popupContent);
  return marker;
}

d3.json(url).then(function(response) {
  let features = response.features;
  // console.log(features);

  L.geoJson(response, {
    pointToLayer: function(feature, latlng) {
      // console.log(feature.geometry.coordinates[3]);
      return L.circleMarker(latlng);
    },
    style: circlemarker,
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.coordinates[0][1], { maxWidth: "auto" });
    }
  }).addTo(Mymap);
});





// d3.json(url).then(function(response) {
//   let features = response.features;
//   console.log(features)
//   L.geoJson(response, {
//     pointToLayer: function( feature, latlng) {
//       // console.log(latlng)
//       console.log(feature)
//     return L.circleMarker(latlng)
//     },
//     style: circlemarker    
// })

// })
// onEachFeature: function( feature, layer ){
//   layer.bindPopup (feature.properties.coordinates[0][1], {  maxWidth: "auto"})}
//   .addTo(Mymap);   
 