//Configuration file for BLM webpage
//maps for this test are stored at 2023_08_23/states/NV/
//	BlendTimeSeriesSO.png,SOBlendMaps2.png, LongTermDroughtBlendTable.png

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
var filenames_images = {
	'timeseries':'BlendTimeSeriesSO.png',
	'table':'LongTermDroughtBlendTable.png',
	'maps': 'SOBlendMaps2.png'
};

//path to the image folders for dates
var path_to_images = 'static/img/data/';
