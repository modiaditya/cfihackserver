SITA.initMenu = function() {
	var showSection = function(sectionId) {
  	$('#map-section').hide();
  	$('#chart-section').hide();
    $('#marker-section').hide();

  	$('#' + sectionId).show();
  }

  $('#map-link').click(function() {
    showSection('map-section');
    SITA.Map();
    return false;
  });

  $('#chart-link').click(function() {
    showSection('chart-section');
    SITA.Chart();
    return false;
  });

  $('#marker-link').click(function() {
    console.log("inside marker link");
    showSection('marker-section');
    SITA.Marker();
    return false;
  })

  showSection('map-section');
  SITA.Map();
}

$(document).ready(function(){

  SITA.initMenu();

});