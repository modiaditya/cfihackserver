SITA.Timeline = function() {

  // mock data
  $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'School infrastructure tracking'
        },
        xAxis: {
            type: 'category'
        },

        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                }
            }
        },

        series: [{
            name: 'Facilities',
            colorByPoint: true,
            data: [{
                name: 'Ramps',
                y: 5,
                drilldown: 'ramps'
            }, {
                name: 'Toilets',
                y: 2,
                drilldown: 'toilets'
            }, {
                name: 'Water',
                y: 4,
                drilldown: 'water'
            }, {
                name: 'Playground',
                y: 6,
                drilldown: 'playground'
            }, {
                name: 'Library',
                y: 2,
                drilldown: 'library'
            }]
        }],
        drilldown: {
            series: [{
                id: 'ramps',
                data: [
                    ['1', 4],
                    ['2', 2],
                    ['3', 1],
                    ['4', 2],
                    ['5', 1],
                    ['6', 1]
                ]
            }, {
                id: 'toilets',
                data: [
                    ['1', 4],
                    ['2', 2],
                    ['3', 1],
                    ['4', 2],
                    ['5', 3],
                    ['6', 6],
                    ['7', 2],
                    ['8', 8],
                ]
            }, {
                id: 'water',
                data: [
                    ['1', 4],
                    ['2', 2],
                    ['3', 1],
                    ['4', 2],
                    ['5', 3]
                ]
            }, {
                id: 'playground',
                data: [
                    ['1', 4],
                    ['2', 2],
                    ['3', 1],
                    ['4', 2],
                    ['5', 3]
                ]
            }, {
                id: 'library',
                data: [
                    ['1', 4],
                    ['2', 2],
                    ['3', 1],
                    ['4', 2],
                    ['5', 3],
                    ['6', 7]
                ]
            }]
        }
    });



}