SITA.Chart = function() {

$.get( "/mock/chartmock.json", function(data) {
  var chartData = new SITA.ChartUtil().parseDrilldown(data);
  $('#container').highcharts(chartData);
});

}