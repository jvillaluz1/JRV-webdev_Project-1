// Initialize and add the map
function initMap() {
  // The location of Prospero
  const prospero = { lat: 45.6925, lng: -121.5519 };
  
  // Custom map style to match the color palette
  const customMapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffd000"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffd000"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffd000"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffd000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffd000"
        }
      ]
    }
  ];

  // Map options
  const mapOptions = {
    zoom: 10,
    center: prospero,
    styles: customMapStyle,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
    }
  };
  
  // The map, centered at Prospero
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
  // Create custom marker icon
  const markerIcon = {
    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
    fillColor: "#ffd000",
    fillOpacity: 1,
    strokeWeight: 2,
    strokeColor: "#000000",
    scale: 2
  };
  
  // Add a marker at Prospero
  const marker = new google.maps.Marker({
    position: prospero,
    map: map,
    title: "Prospero",
    icon: markerIcon,
    animation: google.maps.Animation.DROP
  });
  
  // Create info window content with your theme styling
  const contentString = 
    '<div style="color: #ffd000; font-family: \'Press Start 2P\', sans-serif; font-size: 12px;">' +
    '<h3 style="font-size: 14px; margin-bottom: 10px;">PROSPERO</h3>' +
    '<p style="font-size: 10px; line-height: 1.5;">The fictional city from Project Wingman, located in Cascadia.</p>' +
    '<p style="font-size: 10px; line-height: 1.5;">Site of a major conflict involving Crimson 1.</p>' +
    '</div>';
  
  // Create info window
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 250
  });
  
  // Open info window when marker is clicked
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}