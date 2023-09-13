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
	console.log(src_report)

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
		export_to_pdf('img_report')
		//Uncaught (in promise) DOMException: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.
	};
};


 function export_to_pdf(div_id) {
        var dom_el = document.getElementById(div_id);
        var downloadFileName = 'downloadFile.pdf';

        html2canvas(dom_el, {
            useCORS: true,
           }).then(function (canvas) {
                var h=$('#'+div_id).height();
                var w=$('#'+div_id).width();

                var img = canvas.toDataURL("image/png,1.0");
		 //img.setAttribute('crossorigin', 'anonymous');
                if(w>h){
                        var orient = 'landscape';
                }else{
                        var orient = 'portrait';
                };

                var pad_h = 50;
                var pad_w = 50;

                var pdf = new jsPDF(orient, 'pt', [h + pad_h, w + pad_w]);

                    //addImage(imageData, format, x,y, width, height, alias, compression, rotation
                    //x,y are 5pt padding on the left or upper edge of page
                    pdf.addImage(img, 'PNG', 5, 5, w, h);

                    //add credits at bottom of page
                    pdf.setFontSize(12);
                    pdf.save(downloadFileName);
        })
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
