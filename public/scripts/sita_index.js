SITA.initMenu = function() {

  var _this = this;

  this.showSection = function(sectionId) {
  	$('#map-section').hide();
  	$('#chart-section').hide();
    $('#marker-section').hide();
    $('#home-section').hide();

  	$('#' + sectionId).show();
  }

  $('.map-link').click(function() {
    _this.showSection('map-section');
    SITA.Map();
    return false;
  });

  $('.chart-link').click(function() {
    _this.showSection('chart-section');
    SITA.Chart();
    return false;
  });

  $('.marker-link').click(function() {
    _this.showSection('marker-section');
    SITA.Marker();
    return false;
  })

  $('.home-link').click(function() {
    _this.showSection('home-section');
    return false;
  })

}

$(document).ready(function(){

  new SITA.initMenu().showSection('home-section');

});
