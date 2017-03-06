/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','util','template'], function ($,util,template) {
    var cs_id = util.getQueryString('cs_id');

    // 渲染模版
    $.get('/v6/course/lesson', { cs_id: cs_id }, function(data) {
        if(data.code == 200) {
            $('.steps').html(template('step-tpl', data.result));
        }
    });

    // 添加章节
    $(document).on('click', '#lesson-add', function() {
        $('#chapterModal').modal();
    });

    // 编辑章节
    $(document).on('click', '#lesson-edit', function() {
        $('#chapterModal').modal();
    });
});