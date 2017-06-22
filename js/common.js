/**
 * Created by ronnie on 17/5/4.
 */


'use strict';

$(function(){

    // 移动端导航菜单滑动点击事件切换
    var windowWidth = $(window).width();
    var step = 768;
    if(windowWidth < step){
        $('#nav_service').on('click',function(){
            $(this).children('ul').toggle();
        });
        $('#nav_account').on('click',function(){
            $(this).children('ul').toggle();
        });
        // $('.collapse').css({'position':'absolute','width':windowWidth,'background':'#000','opacity':'.6'});
        // $('.collapse li a').css('line-height','15px');
    }else{
        $('#nav_service').hover(function(){
            $(this).children('ul').css('display','block');
        },function(){
            $(this).children('ul').css('display','none');
        });

        $('#nav_account').hover(function(){
            $(this).children('ul').css('display','block');
        },function(){
            $(this).children('ul').css('display','none');
        });
        // 子菜单hover事件
        $('.nav > li > ul a').hover(function(){
            $(this).css('color','#fff');
        },function(){
            $(this).css('color','#ccc');
        });
    }

    //吸顶效果背景色滚动变换
    // $(window).scroll(function(){
    //     var winScroll = $(window).scrollTop() + 100;
    //     var winScroll_m = $(window).scrollTop() + 70;
    //     if(windowWidth >= 1024){
    //         if(winScroll > 985){
    //             $('.navbar-appcpi').css('background','#5dc9c9')
    //         }else{
    //             $('.navbar-appcpi').css('background','#fff')
    //         }
    //     }else if( 767 < windowWidth && windowWidth < 1024){
    //         if(winScroll > 768){
    //             $('.navbar-appcpi').css('background','#5dc9c9')
    //         }else{
    //             $('.navbar-appcpi').css('background','#fff')
    //         }
    //     }else{
    //         if(winScroll_m > 450){
    //             $('.navbar-header').css('background','#5dc9c9')
    //         }else{
    //             $('.navbar-header').css('background','#fff')
    //         }
    //     }
    // });

    //模拟登陆成功后,导航菜单变化
    $('.li-login').on('click',function(){
        $('#nav_account').css('display','block');
        $('#log').css('display','none');
        $('#reg').css('display','none');
        // $(location).prop('href', 'index.html');
    });
    $('#quit').on('click',function(){
        $('#nav_account').css('display','none');
        $('#log').css('display','block');
        $('#reg').css('display','block');
    });
    // 导航栏active状态切换
    $('.collapse > .nav > li').on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active');
    });

    //placeholder IE
    $('input, textarea').placeholder();
});


