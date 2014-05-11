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

	var facilityName = reports[0].facilityName;
	var photoUrl = reports[0].photoUrl;

	var photoEl = '<img src="' + photoUrl + '">';
	var photoColumn = '<td>' + photoEl + '</td>';
	var facilityNameColumn = '<td>' + facilityName + '</td>';
	var tableRow = facilityNameColumn + photoColumn
	$('#school-reports').empty();
	$('#school-reports').append(tableRow);

  });
};