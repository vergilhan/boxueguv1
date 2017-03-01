/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','jqueryCookie'], function ($,undefined) {
    var userInfo=null;
    try {
        userInfo=JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo={};
    }
    $('.login .avatar img').attr('src', userInfo.tc_avatar?userInfo.tc_avatar:'/uploads/default.jpg');
    // 监听form表单的提交事件
    // return false阻止默认提交
    // 通过ajax发送表单数据
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