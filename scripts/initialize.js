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
	var key_areaType = $('#location_type').val();
	var key_areaSubtype = $('#location_subtype').val();

	var path_to_date_imgs = window.path_to_images+'/'+key_date+'/'+key_areaType+'/'+key_areaSubtype;

	var src_timeseries = path_to_date_imgs + '/' + filenames_images['timeseries'];
	var src_maps = path_to_date_imgs + '/' + filenames_images['maps'];
	var src_table = path_to_date_imgs + '/' + filenames_images['table'];;

	 $('#img_timeseries').attr('src', src_timeseries);
	 $('#img_maps').attr('src', src_maps);
	 $('#img_table').attr('src', src_table);
};

<!------------------------------------>
<!--    FUNCTION: INITIALIZE     -->
<!------------------------------------>
function initialize(){
	replace_selectForm('#date',window.dates );
	replace_selectForm('#location_state',window.states );
	//replace_selectForm('#location_district',get_dict_districts());

	//update_images();

	<!------------------------------------>
	<!--    LISTENERS                   -->
	<!------------------------------------>
	$('#location_type').on('change',function(event){
		replace_selectForm('#location_subtype',get_dict_area_subtypes());
		//update_images();
	});

};
<!------------------------------------>
