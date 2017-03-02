/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery', 'util', 'template', 'datepicker', 'datepickerLanguage'], function ($, util, template, datepicker, undefined) {
    //根据编辑和添加，对应的渲染表单
    var tcId = util.getQueryString('tc_id');
    if (tcId) {
        //获取该讲师之前的信息，填充到表单中
        $.get('/v6/teacher/edit', {tc_id: tcId}, function (data) {
            if (data.code == 200) {
                var html = template('teacher-form-tpl', data.result);
                $('.teacher-add').html(html);
                $('#datepicker,#datepicker_b').datepicker({
                    language: 'zh-CN',
                    endDate: new Date(),
                    format: 'yyyy-mm-dd'
                });
            }
        });
    }
    //这里是添加讲师相关的操作
    else {
        var html = template('teacher-form-tpl', {});
        $('.teacher-add').html(html);
        $('#datepicker,#datepicker_b').datepicker({
            language: 'zh-CN',
            endDate: new Date(),
            format: 'yyyy-mm-dd'
        });
    }
    //监听表单提交事件
    $('.teacher-add').on('submit', '#teacher-add-form', function () {
        $.ajax({
            url: '/v6/teacher/' + (tcId ? 'update' : 'add'),
            type: 'post',
            data: $(this).serialize() + (tcId ? '&tc_id=' + tcId : ""),
            success: function (data) {
                if (data.code == 200) {
                    location.href = '/html/teacher/list.html';
                }
            }
        });
        return false;
    });
});