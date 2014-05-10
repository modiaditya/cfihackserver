SITA.Chart = function() {

  var refreshChart = function(type, name, subtype) {

    //TODO: /chart?type=state&name=gujarat&subtype=district
    $.get( "/mock/chartmock.json", function(data) {
      var chartUtil = new SITA.ChartUtil();
      var chartData = chartUtil.parseDrilldown(data);
      $('#container').highcharts(chartData);

      var subTypeEl = $('#subtype');
      subTypeEl.empty();
      subTypeEl.append('<input class="typeahead" type="text">');
      $('#subtype .typeahead').autocomplete({
        source: data.subtype.values,
        select: function( event, ui ) {
          var nextType = data.subtype.name;
          var nextName = ui.item.value;
          var nextSubtype = SITA.SUBTYPE_MAP[ui.item.value];
          refreshChart(nextType, nextName, nextSubtype);
        }
      });

    });

  }

  refreshChart();

}