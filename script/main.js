$(function() {
    $('.menu').mouseenter(function() {
        $('.sub_menu').stop().slideDown(200);
        $('.menu_bg').stop().slideDown(200);
    });
    $('.menu').mouseleave(function() {
        $('.sub_menu').stop().slideUp(200);
        $('.menu_bg').stop().slideUp(200);
    });




    // setInterval(function() {
    //     $('#drink').animate({
    //         'margin-left': -1200
    //     },3000 ,function() {
    //         $('#drink div').eq(0).appendTo('#drink');
    //         $('#drink').css({
    //             'margin-left': 0
    //         });
    //     });
    // },5000);




    // setInterval(function() {
    //     $('#bakery').animate({
    //         'margin-left': -1200
    //     },4000, function() {
    //         $('#bakery div').eq(0).appendTo('#bakery');
    //         $('#bakery').css({
    //             'margin-left': 0
    //         });
    //     });
    // },6000);


    


    

});