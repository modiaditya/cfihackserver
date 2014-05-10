SITA.Marker = function() {
	

	$.get("/mock/markerMapMock.json", function(schoolRecordsData){
		console.log("inside sita");
		var marker;
		var mapOptions = {
    	zoom: 7,
    	center: new google.maps.LatLng(21.84389, 70.57074)
  	};
	var map = new google.maps.Map(document.getElementById('map-marker-canvas'),
          mapOptions);

		console.log("inside")
		for(var i in schoolRecordsData.schoolRecords){
			var school = schoolRecordsData.schoolRecords[i];
			var position = new google.maps.LatLng(school.lat, school.lng);
			console.log(school)
			var contentString = school.schoolName;
			var infowindow = new google.maps.InfoWindow({
      			content: contentString
  			});
			var marker = new google.maps.Marker({       
        		position: position , 
        		map: map,  // google.maps.Map 
        		title: 'Title'      
    		}); 

			google.maps.event.addListener(marker, 'click', function(contentString) {
    			return function(){
        		infowindow.setContent(contentString);//set the content
        		infowindow.open(map,this);
			}
		}(contentString));
	}
	})	
}