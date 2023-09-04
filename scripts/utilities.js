
function findBootstrapEnvironment() {
    var envs = ['xs', 'sm', 'md', 'lg'];

    $el = $('<div>');
    $el.appendTo($('body'));

    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];

        $el.addClass('hidden-'+env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env
        }
    };
};


function getValue(key){
                value=$('#'+key).find('option:selected').text();
                return value;
};


function replace_selectForm(listID,ValuesList){
        jQuery(listID+' > option').remove();
         for (var key in ValuesList) {
                    var value = ValuesList[key];
                    var myString = '<option value="' + key + '">' + value + '</option>';
                    jQuery(listID).append(myString);
        }
};

function replaceVariables_selectForm_useOptGroup(listID,ValuesList,optgroupKeys,optgroupStartVariables){
        jQuery(listID+' > option').remove();
        $(listID).children().remove("optgroup");
         for (var key in ValuesList) {
               //add optgroup to dropdown
                if ($.inArray(key, optgroupKeys) > -1){
                    optgroup = '<optgroup label="'+optgroupStartVariables[key]+'" style="color:red">'
                    $(listID).append(optgroup);
                };
                //add variable-key pair to dropdown
                var value = ValuesList[key];
                value = '&nbsp;&nbsp;&nbsp;' + value;
                var myString = '<option value="' + key + '">' + value + '</option>';
                jQuery(listID).append(myString);
        };
};

