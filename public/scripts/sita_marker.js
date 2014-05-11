SITA.Marker = function() {
	

	$.get("/pinMap", function(schoolRecordsData){
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
			var contentString = getHtmlOutputForSchool(school);
			var infowindow = new google.maps.InfoWindow({
      			content: contentString
  			});
			var marker = new google.maps.Marker({       
        		position: position , 
        		map: map   
    		}); 

			google.maps.event.addListener(marker, 'click', function(contentString) {
    			return function(){
        		infowindow.setContent(contentString);//set the content
        		infowindow.open(map,this);

        		// Handle school details link
				$('.school-details-link').click(function() {
					var schoolId = this.id;
					new SITA.initMenu().showSection('school-section');
					new SITA.SchoolReport(schoolId);
				});

			}
		}(contentString));
	}
	})	

}

function getHtmlOutputForSchool(school){
	// var schoolHtmlOutput = '<div> ' + school.schoolName +
	// 						'<table>'+ 
	// 						'<tr><th> </th>'+
	// 						'<th> Open </th>' +
	// 						'<th> Close </th></tr>' +
	// 						'<tr><td>Barrier Open </td>'+
	// 						'<td> '+ school.barrier.open +' </td>' +
	// 						'<td> '+ school.barrier.close +' </td></tr>' +
	// 						'<tr><td>Toilets </td>'+
	// 						'<td> '+ school.toilets.open +' </td>' +
	// 						'<td> '+ school.toilets.close +' </td></tr>' +

	// 						+'</table>'

	// 						+'</div>'; 

	var s =   '</div>'+
		      '<h4 id="firstHeading" class="firstHeading">' + school.name + '</h4>'+
		      '<table cellspacing="10"><tr><th> </th><th>Open&nbsp;&nbsp;</th><th>Resolved</th></tr>'+
		      '<tr><td>Barrier-free Access</td> <td> '+ school.barrier.open +' </td><td> '+ school.barrier.resolved +' </td></tr>'+ 
		      '<tr><td>Toilets</td> <td> '+ school.toilets.open +' </td><td> '+ school.toilets.resolved +' </td></tr>'+ 
		      '<tr><td>Drinking Water</td> <td> '+ school.drinkingWater.open +' </td><td> '+ school.drinkingWater.resolved +' </td></tr>'+ 
		      '<tr><td>Playground</td> <td> '+ school.playground.open +' </td><td> '+ school.playground.resolved +' </td></tr>'+ 
		      '<tr><td>Library</td> <td> '+ school.library.open +' </td><td> '+ school.library.resolved +' </td></tr>'+ 
		      '</table>'+
		      '<p><a class="school-details-link" id="' + school.schoolCode + '" href="#">' +
		      'View detailed reports</a> </p>' +
		      '</div>';
	return s;
}