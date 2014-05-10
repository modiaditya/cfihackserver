
var Parse = require('parse').Parse;

Parse.initialize("3P4Yf9CyJU9up39DrDEvfxrEkBXFvqkTopkSJRNl", "002iMIHr3Ul7Ee9dv8B2QsHXHDZmOzatqds6tJIZ");

exports.addReport = function(data, callback) {
	var Report = Parse.Object.extend("report");

	var reportInstance = new Report();
	reportInstance.set("facilityNumber", 5);
	reportInstance.set("parameterNumber", 2);
	reportInstance.set("fileName", "savingPrivateRyan.jpg");
	reportInstance.set("comments", "This is a comment");
	reportInstance.set("schoolCode", "24010309101");

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