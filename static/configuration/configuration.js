//Configuration file for BLM webpage
//maps for this test are stored at 2023_08_23/states/NV/
//	BlendTimeSeriesSO.png,SOBlendMaps2.png, LongTermDroughtBlendTable.png

/*----------------
* DATES 
*----------------*/
// key = folder name for dates
// value = display name for date on webpage
var dates = {
	'2023_08_23': '2023-08-23'
};

/*----------------
* AREA TYPES AND AREAS
*----------------*/
// key = folder name for dates
// value = display name for date on webpage
var areaTypes = {	
	'states': 'States'	
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
