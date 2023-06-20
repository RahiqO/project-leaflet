// We create the tile layer that will be the background of our map
  let basemapLayer =   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
// We create the map object with options.
  let baseMaps = {
    "Street Map": basemapLayer
  };
  // let overlayMaps = {
  //   "Earth quake location": earthquake
  //   };

  let Mymap = L.map("map", {
      center: [37.09024, -95.712891],
      zoom: 4,
      layers: [basemapLayer]
    });

    // basemapLayer.addTo(map);

    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) { console.log(data)
    });

  function getEarthquakeStyle(feature) {
  // Extract the magnitude value from the properties
    let magnitude = feature.geometry.coordinates[3];
    var color = getColor(magnitude);
    var radius = getRadius(magnitude);

    let earthmarkers = [];

    for (let index = 0; index < magnitude.length; index++) {
        let magnitude = magnitude[index];
    
      
        var style = {
          radius: radius(magnitude),
          fillColor: color(magnitude),
          color: '#ffffff',
          weight: 1,
          opacity: 1,
          fillOpacity: 0.7
        };
      
        return style;
      }
  // This function determines the color of the marker based on the magnitude of the earthquake.      
function getColor(magnitude) {
    // Define color logic based on magnitude ranges
  if (magnitude < 4) {
  return '#ff0000'; // Red for low magnitudes
  } else {
    return '#00ff00'; // Green for high magnitudes
  }
}}

function getEarthquakcoords(featurecoords) {

  // Extract the magnitude value from the propertie
  let latlng = feature.geometry.coordinates;

    for (let index = 0; index < latlng.length; index++) {
      let latlng = latlng[index];
      var coords = L.latLng(coordinates[i][0], coordinates[i][1]);
      var circleMarker = L.circleMarker(coords, styleInfo());
      circleMarker.addTo(map);

}}
var circleMarker = L.circleMarker(featurecoords, {
  radius: getRadius(magnitude),
  fillColor: getColor(magnitude),
  color: '#ffffff',
  weight: 1,
  opacity: 1,
  fillOpacity: 0.7
});

circleMarker.bindPopup('Magnitude: ' + feature.geometry.coordinates[3] + '<br>Location: ' + feature.geometry.coordinates[0][1]);
circleMarker.addTo(map);

var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Tegnforklaring</h4>";
  div.innerHTML += '<i style="background: #477AC2"></i><span>Water</span><br>';
  div.innerHTML += '<i style="background: #448D40"></i><span>Forest</span><br>';
  div.innerHTML += '<i style="background: #E6E696"></i><span>Land</span><br>';
  div.innerHTML += '<i style="background: #E8E6E0"></i><span>Residential</span><br>';
  div.innerHTML += '<i style="background: #FFFFFF"></i><span>Ice</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';
  
  return div;
};

legend.addTo(map);


// function getRadius(magnitude) {
//   // Define radius logic based on magnitude ranges
//   return magnitude * 2;

    
  // L.control.layers(baseMaps, overlayMaps, {
  //     collapsed: false
  //   }).addTo(map);
  // }
  
  
  // function createMarkers(response) {

  //   let stations = response.metadata.geometry;

  //   let earthquakeMarkers = [];

  //   for (let index = 0; index < stations.length; index++) {
  //     let station = stations[index];
  //     let earthquakeMarkers = L.marker([station.coordinates[0], station.coordinates[1]])
  //     .bindPopup("<h3>" + station.title + "<h3><h3>Capacity: " + station.capacity + "</h3>");

  //     earthquakeMarkers.push(earthquakeMarkers);
  //   }

  //   createMap(L.layerGroup(earthquakeMarker));
  
  // d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(createMarkers);
  
  // fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(data) {
  //   // 'data' variable contains the parsed GeoJSON as a JavaScript object
  //   console.log(data);
  //   // You can access the properties and features of the GeoJSON object here
  // })
  // .catch(function(error) {
  //   console.log('Error:', error);
  // })



  // // // Create a baseMaps object to hold the streetmap layer.
  // // let baseMaps = {
  // //   "Street Map": streetmap
  // // };

  // let url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

  //   fetch(url)
  //  .then(function(response) {
  //   return response.json();
  // })
  //   .then(function(data) {
  //   // 'data' variable contains the parsed GeoJSON as a JavaScript object
  //   console.log(data);
  //   // You can access the properties and features of the GeoJSON object here
  // })
//   d3.json(data).then((response) => {

//     let stations = response.itm.stations

//     let earthmarker = []
    
//     for ( let i = 0; i < stations.length; i++){
//       let station = stations[i]
//       let earthcoords = [station.lat, station.lon]
//       let earthmarker = L.marker(bikecoords)
//       earthmarker.push(earthmarker)
//     }
  
//   let earthquakestations = L.layerGroup(earthmarker)
//   })

//   // Create an overlayMaps object to hold the bikeStations layer.
//   let overlayMaps = {
//     "earthquake Stations": earthquake
//   };

//   // Create the map object with options.
//   let map = L.map("map", {
//     center: [37.09024, -95.712891],
//     zoom: 4,
//     layers: [streetmap, earthquake]
//   });
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(map);
// }



































// let myMap = L.map("map", {
//     center: [37.09024, -95.712891],
//     zoom: 4
//   });
  
//   // Adding the tile layer
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(myMap);
  
//   fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     // 'data' variable contains the parsed GeoJSON as a JavaScript object
//     console.log(data);
//     // You can access the properties and features of the GeoJSON object here
//   })
//   .catch(function(error) {
//     console.log('Error:', error);
 
//   d3.json(url).then(function(response) {

//     // Create a new marker cluster group.
//     let markers = L.markerClusterGroup();
//     for (let i = 0; i < response.length; i++) {

//         // Set the data location property to a variable.
//         let location = response[i].features;
    
//         // Check for the location property.
//         if (location) {
    
//           // Add a new marker to the cluster group, and bind a popup.
//           markers.addLayer(L.marker([geometry.coordinates[1], geometry.coordinates[0]])
//             .bindPopup(response[i].descriptor));
//         }
    
//       }
//     myMap.addLayer(markers);
//   })  
// });

