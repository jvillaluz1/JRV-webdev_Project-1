// Initialize the map
function initMap() {
  // Coordinates for Prospero (from Project Wingman)
  const prospero = { lat: 45.6925, lng: -121.5519 };
  
  // Create the map centered at Prospero
  const map = new google.maps.Map(document.getElementById("map"), {
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

// In case the window.onload approach is needed
window.onload = function() {
  // Check if the map div exists
  if (document.getElementById("map")) {
    console.log("Map container found");
    // Map will be initialized by the callback parameter in the API script
  } else {
    console.log("Map container not found");
  }
};