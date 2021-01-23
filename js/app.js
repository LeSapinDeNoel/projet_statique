$(document).ready(function() {

    // Le menu burger

    $(document).on('click', 'button', function() {
        if($('#j_menu').hasClass('hide')) {
            $('#j_menu').removeClass('hide');
            $('#j_menu').animate({ "left": "+=350px" }, "slow");
            $('.bt').removeClass('bg');
        } else {
            $('#j_menu').animate({ "left": "-=350px" }, "slow");
            $('#j_menu').addClass('hide');
            $('.bt').addClass('bg');
        };
    });

    // while (true) {
    //     if (!$('#img_a').hasClass('s_hide')) {
    //         $('#img_a').addClass('s_hide');
    //         $('#img_b').removeClass('s_hide');
    //     } else if (!$('#img_b').hasClass('s_hide')) {
    //         $('#img_b').addClass('s_hide');
    //         $('#img_c').removeClass('s_hide');
    //     } else if(!$('#img_c').hasClass('s_hide')) {
    //         $('#img_c').addClass('s_hide');
    //         $('#img_a').removeClass('s_hide');
    //     }
    // }

});
