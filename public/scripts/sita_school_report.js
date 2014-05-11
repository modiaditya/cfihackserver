SITA.SchoolReport = function(schoolId) {

  var url = 'school?schoolCode='+ schoolId;
  $.get(url, function(data) {
  	var schoolName = data.schoolName;
  	var schoolCode = data.schoolCode;
  	var clusterName = data.clusterName;
  	var districtName = data.districtName;
  	var villageName = data.villageName;
  	var pincode = data.pincode;
  	var state = data.state;
  	var contactDetails = data.contactDetails;

  	var reports = data.reports;
  	
    $('#school-name').text(schoolName);
    $('#school-code').text(schoolCode);
    $('#school-district-name').text(districtName);
    $('#school-village-name').text(villageName);
    $('#school-cluster-name').text(clusterName);
    $('#school-district-name').text(districtName);
    $('#school-village-name').text(villageName);
    $('#school-pin-code').text(pincode);
    $('#school-state').text(state);
    $('#school-contact-details').text(contactDetails);
    // $('#school-reports').text(reports);

    for (var i in reports) {
    	debugger;
    	var facilityName = reports[i].facilityName;
    	var comments = reports[i].comments;
  		var photoUrl = reports[i].photoUrl;

  		var photoEl = '<img src="' + photoUrl + '">';
  		var photoColumn = '<td>' + photoEl + '</td>';
  		var facilityNameColumn = '<td>' + facilityName + '</td>';
  		var commentColumn = '<td>' + facilityName + '</td>';
  		var tableRow = '<tr>' + photoColumn + facilityNameColumn + commentColumn + '</tr>';
  		$('#school-reports').append(tableRow);
    }

  });
};