<!---------------------------------------->
<!--   FUNCTION: GET DICT AREA SUBTYPES -->
<!---------------------------------------->
function get_dict_districts(){
	var state = $('#location_state').val();
	var dict_type = window.areas[state];
	return dict_type;
}

<!------------------------------------>
<!--    FUNCTION: UPDATE IMAGES     -->
<!------------------------------------>
function update_images(){
	var key_date = $('#date').val();
	var key_state = $('#location_state').val();

	var path_to_date_imgs = window.path_to_images+'/'+key_date+'/states/'+key_state;

	var src_report = path_to_date_imgs + '/' + filenames_reports['drought'];

	 $('#img_report').attr('src', src_report);
};

function downloadReport(){
	var key_date = $('#date').val();
        var key_state = $('#location_state').val();
        var path_to_date_imgs = window.path_to_images+'/'+key_date+'/states/'+key_state;
        var src_report = path_to_date_imgs + '/' + filenames_reports['drought'];

	var map_format = $('#map_format').val();
	if(map_format == 'png'){
		window.open(src_report);
	}else if(map_format == 'pdf'){
		console.log('PDF download not set up yet')
	};
};

<!------------------------------------>
<!--    FUNCTION: INITIALIZE     -->
<!------------------------------------>
function initialize(){
	replace_selectForm('#date',window.dates );
	replace_selectForm('#location_state',window.states );
	//replace_selectForm('#location_district',get_dict_districts());

	update_images();

	<!------------------------------------>
	<!--    LISTENERS                   -->
	<!------------------------------------>
	$('#location_state').on('change',function(event){
		replace_selectForm('#location_subtype',get_dict_area_subtypes());
		update_images();
	});

	

};
<!------------------------------------>
