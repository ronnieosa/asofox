/**
 * Created by knrainy on 17/5/8.
 */


$(function(){
    // 下拉菜单选值
    $('.dropdown-menu a').on('click',function(){
            $(this).parent().parent().prev().children('.selec').html($(this).html());
    });
    // 表格升降序
    $('.table th > span').on('click',function(){
        $(this).addClass('dir-active').siblings('span').removeClass('dir-active');
    });
    //timer控件
    $('#datetimepicker1').datetimepicker({
        format: 'yyyy-mm-dd',
        minView:'month',
        autoclose: true,
        language: 'zh-CN', //汉化
        todayBtn: true,
        pickerPosition: "bottom-right",
        endDate : new Date()
    }).on('changeDate',function(e){
        var startTime = e.date;
        $('#datetimepicker7').datetimepicker('setStartDate',startTime);
    });

    $('#datetimepicker2').datetimepicker({
        format: 'yyyy-mm-dd',
        minView:'month',
        autoclose: true,
        language: 'zh-CN', //汉化
        todayBtn: true,
        pickerPosition: "bottom-right",
        endDate : new Date()
    }).on('changeDate',function(e){
        var startTime = e.date;
        $('#datetimepicker7').datetimepicker('setStartDate',startTime);
    });
});