// Script used to display the google map

var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 45.6925, lng: -121.5519}
		zoom: 8
	});
}