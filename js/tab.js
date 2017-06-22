/**
 * Created by knrainy on 17/5/11.
 */




$(function(){
    var winWidth = $(window).width();
    if(winWidth < 767){
        $('#toggleTab .row .col-md-2 > ul').removeClass('nav-stacked');
    }
});
