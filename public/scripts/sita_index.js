SITA.initMenu = function() {
	var showSection = function(sectionId) {
  	$('#map-section').hide();
  	$('#chart-section').hide();

  	$('#' + sectionId).show();
  }

  $('#map-link').click(function() {
    showSection('map-section');
    SITA.Map();
  });

  $('#chart-link').click(function() {
    showSection('chart-section');
    SITA.Chart();
  });

  showSection('map-section');
}

$(document).ready(function(){

  SITA.initMenu();

});