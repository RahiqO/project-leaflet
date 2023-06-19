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

    for (let index = 0; index < magnitude.length; index++) {
      let magnitude = magnitude[index];
    }

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

