// Script used to display the google map

// Initialize and add the map
function initMap() {
    // Centering on Prospero
    const center = {lat: 45.6925, lng: -121.5519};
    
    // The map, centered at the chosen location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: center,
    });
    
    // Add a marker at the center
    const marker = new google.maps.Marker({
        position: center,
        map: map,
    });
    
    // You can add more map functionality here, such as:
    
    // Add click event listener to the map
    map.addListener("click", (event) => {
        // Add a marker when user clicks on the map
        placeMarker(event.latLng, map);
    });
}

// Function to place a marker at a location
function placeMarker(location, map) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
    
    // Optional: Create an info window for the new marker
    const infowindow = new google.maps.InfoWindow({
        content: "Latitude: " + location.lat().toFixed(6) + 
                "<br>Longitude: " + location.lng().toFixed(6),
    });
    
    // Open the info window when marker is clicked
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
}