SITA.Chart = function() {

  //TODO: /chart?type=state&name=gujarat&subtype=district
  $.get( "/mock/chartmock.json", function(data) {
    var chartUtil = new SITA.ChartUtil();
    var chartData = chartUtil.parseDrilldown(data);
    $('#container').highcharts(chartData);

    chartUtil.setupTypeahead("Type a " + data.subtype.name + " name", data.subtype.values);

  });

}