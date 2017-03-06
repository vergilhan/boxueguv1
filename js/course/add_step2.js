/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','util','template','uploadify'], function ($,util,template,uploadify) {
    var cs_id=util.getQueryString('cs_id');
    //渲染页面
    $.get('/v6/course/picture',{ cs_id:cs_id }, function (data) {
        if(data.code==200){
            $('.steps').html(template('step-tpl',data.result));
            //课程封面上传
            $('#uplaodify').uploadify({
                swf: '/lib/uploadify/uploadify.swf',
                uploader: '/v6/uploader/cover',
                fileObjName: 'cs_cover_original',
                fileTypeExts: '*.gif; *.jpg; *.png',
                fileSizeLimit: '2MB',
                buttonText: '上传封面',
                buttonClass: 'btn btn-success btn-sm',
                height: '100%',
                width: '100%',
                formData: { cs_id: cs_id },
                onUploadSuccess: function(file, data) {
                    data = JSON.parse(data);
                    $('.cover-img').attr('src', data.result.path);
                }
            });
        }
    });
});