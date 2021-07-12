$(function() {
    $('.menu').mouseenter(function() {
        $('.sub_menu').stop().slideDown(200);
        $('.menu_bg').stop().slideDown(200);
    });
    $('.menu').mouseleave(function() {
        $('.sub_menu').stop().slideUp(200);
        $('.menu_bg').stop().slideUp(200);
    });

    
});