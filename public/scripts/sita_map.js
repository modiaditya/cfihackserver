SITA.Map = function() {

  getData("heatMap?barrier=true&toilets=true&drinkingWater=true&playground=true&library=true", function(taxiData){
				console.log(taxiData);
				setMapData(taxiData);
			});
	
}

function getData(url, callback){
	$.get(url, function( data ) {
       console.log("Inside get" )
       var taxiData = [];
       for(var i in data.locations){
       		var location = data.locations[i] 
       		console.log(location)
       		taxiData[i] = new google.maps.LatLng(location.lat, location.lng);
    	}
    	console.log("returning")
   		callback(taxiData);	
	});

}

function setMapData(taxiData){
	var map, pointarray, heatmap;
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
};

function setValuesInMap(){
	var barrier = document.getElementById("barrier").checked; //1
	var toilets = document.getElementById("toilets").checked; // 2
	var drinkingWater = document.getElementById("drinkingWater").checked; // 3
	var playground = document.getElementById("playground").checked; //4
	var library = document.getElementById("library").checked; //5
	console.log(barrier + toilets + drinkingWater + playground + library);

	var request = "heatMap?"
	if(barrier){
		request += "barrier=true&";
	}
	if(toilets){
		request += "toilets=true&";	
	}
	if(drinkingWater){
		request += "drinkingWater=true&";
	}
	if(playground){
		request += "playground=true&"
	}
	if(library){
		request += "library=true"
	}

	getData(request, function(taxiData){
		setMapData(taxiData);
	})

}