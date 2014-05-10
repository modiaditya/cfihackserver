
var Parse = require('parse').Parse;
var FACILITY_NUMBER = 'facilityNumber';
var PARAMETER_NUMBER = 'parameterNumber';
var SCHOOL_CODE = 'schoolCode';

var FACILITY_MAPPING = {
	'1': 'Barrier-free Access',
	'2': 'Toilets',
	'3': 'Drinking Water',
	'4': 'Playground',
	'5': 'Library'
}

Parse.initialize("3P4Yf9CyJU9up39DrDEvfxrEkBXFvqkTopkSJRNl", "002iMIHr3Ul7Ee9dv8B2QsHXHDZmOzatqds6tJIZ");

exports.addReport = function(data, callback) {
	var Report = Parse.Object.extend("report");

	var reportInstance = new Report();
	reportInstance.set("facilityNumber", 4);
	reportInstance.set("parameterNumber", 2);
	reportInstance.set("fileName", "savingPrivateRyan.jpg");
	reportInstance.set("comments", "This is a comment");
	reportInstance.set("schoolCode", "24010308901");

	reportInstance.save(null, {
		success: function(reportInstance) {
    		console.log('New object created with objectId: ' + reportInstance.id);
    		callback.send(200);
		},
		error: function(reportInstance, error) {
    		console.log('Failed to create new object, with error code: ' + error.description);
		}
	});
}

/*	
Parse.Cloud.define("aggregateCountByType", function(request, response) {
	var query = new Parse.Query("report");
	query.equalTo("")
}
*/

exports.aggregateByAType = function(data, callback) {
	var Report = Parse.Object.extend("report");
	var School = Parse.Object.extend("school");

	var type = data.query.typeKey;
	var name = data.query.typeValue;
	var subType = data.query.subType;

	var schoolCodeQuery = new Parse.Query(School);
	schoolCodeQuery.equalTo(type, name);
	schoolCodeQuery.find({
		success: function(results) {
			var schoolCodes = [];
			var subTypeValues = {};
			for(var i = 0 ; i < results.length; i++) {
				var schoolObject = results[i];
				schoolCodes.push(schoolObject.get(SCHOOL_CODE));
				if(!(schoolObject.get(subType) in subTypeValues)) {
					subTypeValues[schoolObject.get(subType)] = 1;
				}
			}

			if(schoolCodes.length > 0) {
				var reportQuery = new Parse.Query(Report);
				reportQuery.containedIn(SCHOOL_CODE, schoolCodes);
				reportQuery.find({
					success: function(reports) {
						var output = {};
						for(var i = 0; i < reports.length; i++) {
							var reportInstance = reports[i];
							var fn = reportInstance.get(FACILITY_NUMBER);
							var pn = reportInstance.get(PARAMETER_NUMBER);
							if(!(fn in output)) {
								output[fn] = {};
							}
							if(!(pn in output[fn])) {
								output[fn][pn] = 1;
							} else {
								output[fn][pn] += 1;
							}
						}
						var finalOutput = { 'type': type, 'name': name, "subtype": {'name': subType, 'values': Object.keys(subTypeValues)} };
						var facilities = [];
						for(var key in output) {
							var params = { 'name': FACILITY_MAPPING[key] };
							params['problems'] = output[key];
							facilities.push(params);
						}
						finalOutput['facilities'] = facilities;
						callback.send(finalOutput);
					},
					error: function(error) {
						console.log("Error in Report query - " + error.code + " - " + error.message);
					}
				})
			} else {
				callback.send("{}");
			}
		},
		error: function(error) {
			console.log("Error - " + error.code + " - " + error.message);
		}
	});

}



















