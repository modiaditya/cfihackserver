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
      $('#subtype .typeahead').attr("placeholder", "Type a " + data.subtype.name + " name", data.subtype.values);
      $('#subtype .typeahead').autocomplete({
        source: data.subtype.values,
        select: function( event, ui ) {
          refreshChart(data.subtype.name, ui.item.value, SITA.SUBTYPE_MAP[ui.item.value]);
        }
      });

    });

  }

  refreshChart();

}