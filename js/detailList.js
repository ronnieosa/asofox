/**
 * Created by knrainy on 17/5/4.
 */



$(function(){

    //detailList轮播swiper
    var swiper_Detail = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        autoplay:3000,
        loop:true,
        autoplayDisableOnInteraction : false,
        moveStartThreshold: 100
    });

});

