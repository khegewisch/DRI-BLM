//Configuration file for BLM webpage
//reports for this test are stored at 2023_08_23/states/NV/

/*----------------
* DATES 
*----------------*/
// key = folder name for dates
// value = display name for date on webpage
var dates = {
	'2023_08_23': 'August 23, 2023',
};

/*----------------
* AREA TYPES AND AREAS
*----------------*/
var states = {
	 'NV': 'Nevada',
};


// key = folder name for dates
// value = display name for date on webpage
var areaTypes = {	
	'states': 'States',
	'districts':'District Offices',	
	'fields':'Field Offices',	
	'allotments':'Allotments',
};


//key = folder name for dates
var areas = {
	'states': {
		'NV': 'Nevada'	
	}
};

/*----------------
* IMAGE FILENAMES
*----------------*/
var filenames_reports = {
	'drought':'Report_Drought.png',
	'vegetation':'Report_Vegetation.png',
};

//path to the image folders for dates
var path_to_images = 'reports';
