SITA.initMenu = function() {
	var showSection = function(sectionId) {
  	$('#map-section').hide();
  	$('#chart-section').hide();
    $('#marker-section').hide();
    $('#home-section').hide();

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
    showSection('marker-section');
    SITA.Marker();
    return false;
  })

  $('#home-link').click(function() {
    showSection('home-section');
    //SITA.Marker();
    return false;
  })


  showSection('home-section');
  SITA.Map();
}

$(document).ready(function(){

  SITA.initMenu();

});