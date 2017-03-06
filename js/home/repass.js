/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery'], function ($) {
    // 密码修改
    $('#repass-form').on('submit', function () {
        $.ajax({
            url:'/v6/teacher/repass',
            type:'post',
            data:$(this).serialize(),
            success: function (data) {
                if(data.code==200){
                    $('#logout').trigger('click');
                }
            }
        });
        return false;
    });
});