SITA.Chart = function() {

$('#container').highcharts({

        xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        yAxis: {
                title: {
                    text: 'Reports'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },

        legend: {
            symbolWidth: 80
        },
        
        plotOptions: {
            series: {
                color: 'black'
            }
        },
    
        series: [
            {
                name: 'Ramps',
                data: [1, 3, 2, 4, 5, 4, 6, 2, 3, 5, 6, 2],
                color: '#dd0000',
                dashStyle: 'Solid',
                visible: true,
                events: {
                    click: function() {
                        
                    }
                }
            }, 
            {
                name: 'Toilets',
                data: [4, 2, 9, 1, 2, 3, 4, 5, 7, 2, 4, 1, 3],
                color: '#0000dd',
                dashStyle: 'Solid',
                visible: false
            },
            {
                name: 'Water',
                data: [2, 4, 9, 1, 2, 3, 4, 5, 7, 1, 3, 4, 2],
                color: '#00dd00',
                dashStyle: 'Solid',
                visible: false
            },
            {
                name: 'Playground',
                data: [2, 1, 2, 3, 4, 5, 7, 4, 1, 3, 4, 2, 9],
                color: '#fec04c',
                dashStyle: 'Solid',
                visible: false
            },
            {
                name: 'Facilities',
                data: [1, 2, 3, 4, 5, 2, 4, 1, 3, 4, 2, 9, 7],
                color: '#7D26CD',
                dashStyle: 'Solid',
                visible: false
            }
        ]
    });

}