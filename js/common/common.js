define(['jquery', 'jqueryCookie', 'nprogress'], function ($, undefined, NProgress) {
    //ajax请求loading
    $(document).ajaxStart(function () {
        $('.overlay').show();
    }).ajaxStop(function () {
        $('.overlay').hide();
    });
    //进度条
    NProgress.start();
    NProgress.done();
    // 左侧导航下拉列表
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });
    //根据页面路径定位左侧导航
    var pathname=window.location.pathname;
    $('.nav a').removeClass('active').filter('[href="'+pathname+'"]').addClass('active').parents('ul').show();
    //退出功能
    $('#logout').on('click', function () {
        $.post('/v6/logout', function (data) {
            if (data.code == 200) {
                location.href = '/html/home/login.html';
            }
        });
    });

    //获取本地cookie用户信息，同时做容错处理
    var userInfo = null;
    try {
        userInfo = JSON.parse($.cookie('userInfo'));
    } catch (e) {
        userInfo = {};
    }

    //然后展示到左侧导航
    $('.aside .profile h4').html(userInfo.tc_name ? userInfo.tc_name : '无效名称');
    $('.aside .profile img').attr('src', userInfo.tc_avatar ? userInfo.tc_avatar : '/uploads/default.jpg');
});
