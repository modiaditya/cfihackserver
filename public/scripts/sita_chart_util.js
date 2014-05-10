SITA.ChartUtil = function() {

	this.parseDrilldown = function(serverData) {
    	var chartData = {
            chart: { type: 'column' },
            title: { text: 'Open issues in ' + serverData.name + ' ' + serverData.type },
            xAxis: { type: 'category' },
            legend: { enabled: false },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: { enabled: true }
                }
            },

            series: [{
                name: 'Facilities',
                colorByPoint: true,
                data: []
            }],
            drilldown: {
                series: []
            }

        }

        for (var i in serverData.facilities) {
            var facility = serverData.facilities[i];
            var facilityName = facility.name;
            var problems = facility.problems;

            var totalProblemsCount = 0;
            var problemsData = [];
            for (var problem in problems) {
                totalProblemsCount += problems[problem];
                problemsData.push([problem, problems[problem]]);
            }

            // FACILITIES CHART
            chartData.series[0].data.push({
                name: facilityName,
                y: totalProblemsCount,
                drilldown: facilityName
            });

            // PROBLEMS CHART
            chartData.drilldown.series.push({
                id: facilityName,
                data: problemsData
            });
        }
        return chartData;
	};

    this.setupTypeahead = function(placeholderText, stringDataArray) {

        var substringMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substringRegex;
                matches = [];
                substrRegex = new RegExp(q, 'i');
                $.each(strs, function(i, str) {
                  if (substrRegex.test(str)) {
                    matches.push({ value: str });
                  }
                });
                cb(matches);
            };
        };

        $('#subtype .typeahead').empty();
        $('#subtype .typeahead').typeahead({
          hint: true,
          highlight: true,
          minLength: 1
        },
        {
          name: 'states',
          displayKey: 'value',
          source: substringMatcher(stringDataArray)
        });

        $('#subtype .typeahead').attr("placeholder", placeholderText);
    }

}