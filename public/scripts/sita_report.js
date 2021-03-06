SITA.Report = function() {

	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=visualization"></script>
    <script>

		var map, pointarray, heatmap;

		var taxiData = [
		  new google.maps.LatLng(21.737095, 70.297112),
		  new google.maps.LatLng(21.737095, 70.297112),
		  new google.maps.LatLng(21.737095, 70.297112),
		  new google.maps.LatLng(21.737095, 70.297112),
		  new google.maps.LatLng(21.737095, 70.297112),
		  new google.maps.LatLng(21.737095, 70.297112),
		  new google.maps.LatLng(22.203216, 70.533318),
		  new google.maps.LatLng(21.873842, 70.59237),
		  new google.maps.LatLng(23.198853, 70.715842),
		  new google.maps.LatLng(21.84389, 70.57074),
		  new google.maps.LatLng(23.297943, 70.592225),
		  new google.maps.LatLng(21.486322, 70.953097),
		  new google.maps.LatLng(23.298388, 70.621706),
		  new google.maps.LatLng(22.483921, 70.070934),
		  new google.maps.LatLng(23.476525, 70.200705)
		];

		function initialize() {
		  var mapOptions = {
		    zoom: 7,
		    center: new google.maps.LatLng(21.84389, 70.57074),
		    mapTypeId: google.maps.MapTypeId.SATELLITE
		  };

		  map = new google.maps.Map(document.getElementById('map-canvas'),
		      mapOptions);

		  var pointArray = new google.maps.MVCArray(taxiData);

		  heatmap = new google.maps.visualization.HeatmapLayer({
		    data: pointArray
		  });

		  heatmap.set('radius', 20);
		  heatmap.setMap(map);
		}

		google.maps.event.addDomListener(window, 'load', initialize);

    </script>

  console.log('showing report...');
	
}