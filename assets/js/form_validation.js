$(document).foundation({
    abide: {
        validators: {
            checkbox_limit: function(el, required, parent) {
                var group = parent.closest( '.checkbox-group' );
                var limit = group.attr('data-abide-validator-limit').split(',');
                var countC = group.find(':checked').length;
                if( countC >= limit[0] && countC <= limit[1] ) {
                    group.find('small.error').hide();
                    //return true so abide can clear any invalid flags on this element
                    return true;
                } else {
                    group.find('small.error').css({display:'block'});
                    //return false and let abide do its thing to make sure the form doesn't submit
                    return false;
                }
            }
        }
    }
});