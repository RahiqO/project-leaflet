let myMap = L.map("map", {
    center: [37.09024, -95.712891],
    zoom: 4
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

  d3.json(url).then(function(response) {

    // Create a new marker cluster group.
    let markers = L.markerClusterGroup();
    for (let i = 0; i < response.length; i++) {

        // Set the data location property to a variable.
        let location = response[i].location;
    
        // Check for the location property.
        if (location) {
    
          // Add a new marker to the cluster group, and bind a popup.
          markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
            .bindPopup(response[i].descriptor));
        }
    
      }
    myMap.addLayer(markers);
  })  

