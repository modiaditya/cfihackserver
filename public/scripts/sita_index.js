SITA.initMenu = function() {
	var showSection = function(sectionId) {
  	$('#report-section').hide();
  	$('#timeline-section').hide();

  	$('#' + sectionId).show();
  }

  $('#report-link').click(function() {
    showSection('report-section');
    SITA.Report();
  });

  $('#timeline-link').click(function() {
    showSection('timeline-section');
    SITA.Timeline();
  });

  showSection('report-section');
}

$(document).ready(function(){

  SITA.initMenu();

});