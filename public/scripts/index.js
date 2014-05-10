SITA = {};

SITA.initMenu = function() {
	var showSection = function(sectionId) {
  	$('#report-section').hide();
  	$('#timeline-section').hide();

  	$('#' + sectionId).show();
  }

  $.each(['report', 'timeline'], function(index, value) {
    $('#' + value + '-link').click(function() {
      showSection(value + '-section');
    });
  });

  showSection('report-section');
}

$(document).ready(function(){

  SITA.initMenu();

});