SITA.Chart = function() {

  var breadcrumbs = [];

  var refreshChart = function(type, name, subtype) {

    // var url = "/mock/chartmock.json";
    var url = 'chart?typeKey=' + type + '&typeValue=' + name + '&subType=' + subtype;
    $.get(url, function(data) {
      breadcrumbs.push(data.name);

      // POPULATE CHART
      var chartUtil = new SITA.ChartUtil();
      var chartData = chartUtil.parseDrilldown(data);
      $('#container').highcharts(chartData);

      // TYPEAHEAD
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

      // BREADCRUMBS
      var breadCrumbEl = '';
      for (var i in breadcrumbs) {
        breadCrumbEl += breadcrumbs[i];
          if (i < (breadcrumbs.length-1)) {
            breadCrumbEl += ' > ';
          }
      }
      $('#breadcrumbs').html(breadCrumbEl);

    });

  }

  refreshChart('state', 'GUJRAT', 'districtName');

}