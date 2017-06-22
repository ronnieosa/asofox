/*
 * @Author: ronnie
 * @Date:   2017-04-17
 * @Last Modified by:   ronnie
 * @Last Modified time:
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
    // 导航栏active状态切换
    $('.collapse > .nav > li').on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active');
    });
    //吸顶效果背景色改变
    $(window).scroll(function(){
        var winScroll = $(window).scrollTop() + 101;
        var winScroll_m = $(window).scrollTop() + 71;

        if(windowWidth >= 1024){
            if(winScroll > 985){
                $('.navbar-appcpi').css('background','#5dc9c9');
                $('#qqServer').css('display','block');

            }else{
                $('.navbar-appcpi').css('background','transparent');
                $('#qqServer').css('display','none');

            }
        }else if( 767 < windowWidth && windowWidth < 1024){
            if(winScroll > 768){
                $('.navbar-appcpi').css('background','#5dc9c9');
                $('#qqServer').css('display','block');
            }else{
                $('.navbar-appcpi').css('background','transparent');
                $('#qqServer').css('display','none');
            }
        }else{
            if(winScroll_m > 450){
                $('.navbar-header').css('background','#5dc9c9');
                $('#qqServer').css('display','block');
                $('.navbar-appcpi .navbar-toggle').css({'background':'#fff','borderColor':'#fff'});
                $('.navbar-appcpi .navbar-toggle .icon-bar').css('background','#5dc9c9');
            }else{
                $('.navbar-header').css('background','transparent');
                $('#qqServer').css('display','none');
                $('.navbar-appcpi .navbar-toggle').css('background','transparent');
                $('.navbar-appcpi .navbar-toggle .icon-bar').css('background','#fff');
            }
        }
    });

    // 图表轮播图部分
    // gallery插件
    $('#dg-container').gallery();

    // echarts图表绘制部分
    //初始化echarts实例
    var chart1 = echarts.init(document.getElementById('table1'));
    // 指定图表的配置项和数据
    var option = {
        backgroundColor: '#fff',
        // title:{
        //     left: '12%',
        //     // top:'2%',
        //     text:'14.85%',
        //     textAlign:'center',
        //     textStyle:{
        //         fontSize:'24',
        //         color:'#6bb828'
        //     },
        //     subtext:'More visitors',
        //     itemGap: 4
        // },
        color: ['#6bb828'],
        //提示框
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: 'right',
            top:'15%',
            data: ['Overall(Free)']
        },
        grid: {
            // show:true,
            left: '5%',
            right: '5%',
            bottom: 30,
            top: 80,
            containLabel: true
        },
        xAxis: {
            name: '时间',
            nameLocation:'middle',
            nameGap:30,
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#f9f9f9'],
                    type: 'solid'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            data: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
                   '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
                   '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'
            ]
        },
        yAxis: {
            // show:false,
            name: '排名',
            nameLocation:'middle',
            nameGap:30,
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#f9f9f9'],
                    type: 'solid'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            inverse:true,
            boundaryGap:false
        },
        series: [{
            name: 'Overall(Free)',
            type: 'line',
            data: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','37','37','37','55','55',
                   '55','55','89','89','92','92','92','92','92','92','92','92','101','101','101','109','109','124','124','124','158','158','158',
                    '174','174','174','174','304','304','315','315','315','316','316','319','319','335','332','332','349','349','349','380','380','380','409','409'],
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'top' //值显示
            //     }
            // }
            symbol:'circle',
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    chart1.setOption(option);

    var chart2 = echarts.init(document.getElementById('table2'));
    // 指定图表的配置项和数据
    var option = {
        backgroundColor: '#fff',
        // title:{
        //     left: '12%',
        //     // top:'2%',
        //     text:'14.85%',
        //     textAlign:'center',
        //     textStyle:{
        //         fontSize:'24',
        //         color:'#6bb828'
        //     },
        //     subtext:'More visitors',
        //     itemGap: 4
        // },
        color: ['#6bb828'],
        //提示框
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: 'right',
            top:'15%',
            data: ['Overall(Paid)']
        },
        grid: {
            // show:true,
            left: '5%',
            right: '5%',
            bottom: 30,
            top: 80,
            containLabel: true
        },
        xAxis: {
            name: '时间',
            nameLocation:'middle',
            nameGap:30,
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#f9f9f9'],
                    type: 'solid'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            data: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
                '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
                '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'
            ]
        },
        yAxis: {
            // show:false,
            name: '排名',
            nameLocation:'middle',
            nameGap:30,
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#f9f9f9'],
                    type: 'solid'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            inverse:true,
            boundaryGap:false
        },
        series: [{
            name: 'Overall(Paid)',
            type: 'line',
            data: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','327','327','327','4','4','7','7','7',
                    '7','7','8','8','8','8','8','11','11','11','11','11','11','11','11','11','11','11','11','11', '27','27','27','27',
                    '35','35','35','41','41','37','38','38','38','38','38','38','38','38','38','38','39','39','42','42','42','42','44','44'],
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'top' //值显示
            //     }
            // }
            symbol:'circle',
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    chart2.setOption(option);

    var chart3 = echarts.init(document.getElementById('table3'));
    // 指定图表的配置项和数据
    var option = {
        backgroundColor: '#fff',
        // title:{
        //     left: '12%',
        //     // top:'2%',
        //     text:'14.85%',
        //     textAlign:'center',
        //     textStyle:{
        //         fontSize:'24',
        //         color:'#6bb828'
        //     },
        //     subtext:'More visitors',
        //     itemGap: 4
        // },
        color: ['#6bb828'],
        //提示框
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: 'right',
            top:'15%',
            data: ['Overall(Grossing)']
        },
        grid: {
            // show:true,
            left: '5%',
            right: '5%',
            bottom: 30,
            top: 80,
            containLabel: true
        },
        xAxis: {
            name: '时间',
            nameLocation:'middle',
            nameGap:30,
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#f9f9f9'],
                    type: 'solid'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            data: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','00']
        },
        yAxis: {
            // show:false,
            name: '排名',
            nameLocation:'middle',
            nameGap:30,
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#f9f9f9'],
                    type: 'solid'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            inverse:true,
            boundaryGap:false
        },
        series: [{
            name: 'Overall(Grossing)',
            type: 'line',
            data: ['641','346','220','202','224','249','26','260','31','50','45','47','89','44','39','36','30','26','36','32','30','26','30','26','36'],
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'top' //值显示
            //     }
            // }
            symbol:'circle',
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    chart3.setOption(option);

    var chart4 = echarts.init(document.getElementById('table4'));
    // 指定图表的配置项和数据
    var option = {
        backgroundColor: '#fff',
        // title:{
        //     left: '12%',
        //     // top:'2%',
        //     text:'14.85%',
        //     textAlign:'center',
        //     textStyle:{
        //         fontSize:'24',
        //         color:'#6bb828'
        //     },
        //     subtext:'More visitors',
        //     itemGap: 4
        // },
        color: ['#6bb828'],
        //提示框
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: 'right',
            top:'15%',
            data: ['Overall(Free)']
        },
        grid: {
            // show:true,
            left: '5%',
            right: '5%',
            bottom: 30,
            top: 80,
            containLabel: true
        },
        xAxis: {
            name: '时间',
            nameLocation:'middle',
            nameGap:30,
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#f9f9f9'],
                    type: 'solid'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            data: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
                '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
                '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'
            ]
        },
        yAxis: {
            // show:false,
            name: '排名',
            nameLocation:'middle',
            nameGap:30,
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#f9f9f9'],
                    type: 'solid'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            inverse:true,
            boundaryGap:false
        },
        series: [{
            name: 'Overall(Free)',
            type: 'line',
            data: ['247','292','292','325','324','324','324','333','333','333','339','339','354','228','228','228','119','119','119','119','99','67','67','67',
                '55','55','46','46','43','43','43','41','41','41','38','38','38','38','38','41','41','41','47','47','47','58','43','43',
                '42','42','42','42','35','35','37','37','39','39','39','40','40','45','45','45','50','50','39','39','39','17','17','17'],
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'top' //值显示
            //     }
            // }
            symbol:'circle',
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    chart4.setOption(option);

    var chart5 = echarts.init(document.getElementById('table5'));
    // 指定图表的配置项和数据
    var option = {
        backgroundColor: '#fff',
        // title:{
        //     left: '12%',
        //     // top:'2%',
        //     text:'14.85%',
        //     textAlign:'center',
        //     textStyle:{
        //         fontSize:'24',
        //         color:'#6bb828'
        //     },
        //     subtext:'More visitors',
        //     itemGap: 4
        // },
        color: ['#6bb828'],
        //提示框
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: 'right',
            top:'15%',
            data: ['Overall(Free)']
        },
        grid: {
            // show:true,
            left: '5%',
            right: '5%',
            bottom: 30,
            top: 80,
            containLabel: true
        },
        xAxis: {
            name: '时间',
            nameLocation:'middle',
            nameGap:30,
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#f9f9f9'],
                    type: 'solid'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            data: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
                '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
                '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'
            ]
        },
        yAxis: {
            // show:false,
            name: '排名',
            nameLocation:'middle',
            nameGap:30,
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#f9f9f9'],
                    type: 'solid'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            inverse:true,
            boundaryGap:false
        },
        series: [{
            name: 'Overall(Free)',
            type: 'line',
            data: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','_','_','33','33','33',
                '44','60','60','60','68','68','68','73','73','78','78','78','89','89','89','103','103','121','121','151','151','151','66','66',
                '66','81','91','91','91','100','91','100','100','100','109','_','_','_','_','_','_','_','_','_','_','_','_','_'],
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'top' //值显示
            //     }
            // }
            symbol:'circle',
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    chart5.setOption(option);

    var chart6 = echarts.init(document.getElementById('table6'));
    // 指定图表的配置项和数据
    var option = {
        backgroundColor: '#fff',
        // title:{
        //     left: '12%',
        //     // top:'2%',
        //     text:'14.85%',
        //     textAlign:'center',
        //     textStyle:{
        //         fontSize:'24',
        //         color:'#6bb828'
        //     },
        //     subtext:'More visitors',
        //     itemGap: 4
        // },
        color: ['#6bb828'],
        //提示框
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: 'right',
            top:'15%',
            data: ['Overall(Paid)']
        },
        grid: {
            // show:true,
            left: '5%',
            right: '5%',
            bottom: 30,
            top: 80,
            containLabel: true
        },
        xAxis: {
            name: '时间',
            nameLocation:'middle',
            nameGap:30,
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#f9f9f9'],
                    type: 'solid'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            axisLabel:{
                //X轴刻度配置
                interval:15 //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
            },
            data: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
                '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
                '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
                ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
        },
        yAxis: {
            // show:false,
            name: '排名',
            nameLocation:'middle',
            nameGap:30,
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#f9f9f9'],
                    type: 'solid'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            },
            inverse:true,
            boundaryGap:false
        },
        series: [{
            name: 'Overall(Paid)',
            type: 'line',
            data: ['65','65','65','66','65','66','67','67','67','67','67','68','68','70','70','70','73','73','77','77','77','1','1','2',
                '2','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','14','14','14','20','20',
                '23','23','23','23','23','23','23','23','23','23','23','23','23','24','24','23','23','23','24','24','1','1','2','2',
                '_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_'],
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'top' //值显示
            //     }
            // }
            symbol:'circle',
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    chart6.setOption(option);


    //图标层级bug
    $('#carouselForm nav > span').on('click',function(){
        $('#carouselForm #table1').removeClass('chz');
    });

    //列表轮播图swiper

    // var swiper = new Swiper('.swiper-container', {
    //     pagination: '.swiper-pagination',
    //     slidesPerView: 5,
    //     slidesPerGroup:5,
    //     slidesPerColumn: 2,
    //     paginationClickable: true,
    //     spaceBetween: 10,
    //     speed: 1500
    // });
    var mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        paginationClickable: true,
        speed: 1500
    });
    //回到顶部模块
    $('#goTop').on('click',function(){
        $('html,body').animate({scrollTop:0},500);
    });
    //客服信息显示隐藏
    var i = 0;
    $('#kefu_title').on('click',function(){
       i++;
       if(i % 2 !==0){
           $('.kefu_body').animate({left:'-165px',opacity:1},300)
       }else{
           $('.kefu_body').animate({left:'90px',opacity:0},300)
       }
    });



});