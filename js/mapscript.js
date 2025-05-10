// Initialize the map
function initMap() {
  // Coordinates for Prospero (from Project Wingman)
  const prospero = { lat: 45.6925, lng: -121.5519 };
  
  // Get the map container
  const mapContainer = document.getElementById("map");

  // Check if the map container exists
  if (!mapContainer) {
    console.error("Map container not found.");
    return;
  }

  // Create the map centered at Prospero
  const map = new google.maps.Map(mapContainer, {
    zoom: 10,
    center: prospero,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  // Add a marker at Prospero
  const marker = new google.maps.Marker({
    position: prospero,
    map: map,
    title: "Prospero"
  });

  // Add info window
  const infoContent = "<strong>Prospero</strong><br>Location from Project Wingman";
  const infowindow = new google.maps.InfoWindow({
    content: infoContent
  });

  // Open info window when marker is clicked
  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });
}