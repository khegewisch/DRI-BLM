 function export_to_pdf(div_id) {
        var dom_el = document.getElementById(div_id);

	var downloadFileName = 'myDownload.pdf';

        html2canvas(dom_el, {
            useCORS: true,
           }).then(function (canvas) {
                var h=$('#'+div_id).height();
                var w=$('#'+div_id).width();

                var img = canvas.toDataURL("image/png,1.0");
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
                    //pdf.setFontSize(12);
                    //pdf.text(window.toolTitle+" Tool, Climate Toolbox", 20, h+30);

                    pdf.save(downloadFileName);
        })
};
