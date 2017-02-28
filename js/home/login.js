/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','jqueryCookie'], function ($,undefined) {
    $('#form-login').on('submit', function () {
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success: function (data) {
                if(data.code===200){
                    console.log(typeof data.code);
                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                    location.href='/';
                }
            }
        });
        return false;
    });
});