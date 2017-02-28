/**
 * Created by Administrator on 2017/2/25.
 */

requirejs.config({
    baseUrl: '/',
    paths: {
        //第三方库的路径配置
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        jqueryCookie: 'lib/jquery-cookie/jquery.cookie',
        nprogress: 'lib/nprogress/nprogress',
        echarts: 'lib/echarts/echarts.min',
        common: 'js/common/common',
        useEcharts: 'js/common/useEcharts',

        //自己写的路径配置
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        advertAdd: 'js/advert/add',
        advertList: 'js/advert/List',
        courseAdd: 'js/course/add',
        courseAddStep1: 'js/course/add_step1',
        courseAddStep2: 'js/course/add_step2',
        courseAddStep3: 'js/course/add_step3',
        courseCategory: 'js/course/category',
        courseCategoryAdd: 'js/course/category_add',
        courseList: 'js/course/list',
        courseTopic: 'js/course/topic',
        homeLogin: 'js/home/login',
        homeRepass: 'js/home/repass',
        homeSettings: 'js/home/settings',
        teacherAdd: 'js/teacher/add',
        teacherList: 'js/teacher/list'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

// 所有的页面都需要这两个js，先加载他们
require(['jquery', 'bootstrap', 'nprogress', 'echarts', 'common']);
// 获取页面的pathname，然后对应的加载js
(function (window) {
    //获取路径
    var pathname = window.location.pathname;
    require(['jquery', 'jqueryCookie'], function ($, undefined) {
        var sessID = $.cookie('PHPSESSID');
        //登录状态校验
        if (pathname === '/html/home/login.html' && sessID) {
            window.location.href = '/';
        } else if (pathname !== '/html/home/login.html' && !sessID) {
            window.location.href = '/html/home/login.html';
        }
        //如果没有发生页面跳转，就加载对应的js模块
        switch (pathname) {
            case '/':
                require(['useEcharts']);
                break;
            case '/index.html':
                require(['useEcharts']);
                break;
            case '/html/user/list.html':
                require(['userList']);
                break;
            case '/html/user/profile.html':
                require(['userProfile']);
                break;
            case '/html/advert/add.html':
                require(['advertAdd']);
                break;
            case '/html/advert/list.html':
                require(['advertList']);
                break;
            case '/html/course/add.html':
                require(['courseAdd']);
                break;
            case '/html/course/add_step1.html':
                require(['courseAddStep1']);
                break;
            case '/html/course/add_step2.html':
                require(['courseAddStep2']);
                break;
            case '/html/course/add_step3.html':
                require(['courseAddStep3']);
                break;
            case '/html/course/category.html':
                require(['courseCategory']);
                break;
            case '/html/course/category_add.html':
                require(['courseCategoryAdd']);
                break;
            case '/html/course/list.html':
                require(['courseList']);
                break;
            case '/html/course/topic.html':
                require(['courseTopic']);
                break;
            case '/html/home/login.html':
                require(['homeLogin']);
                break;
            case '/html/home/repass.html':
                require(['homeRepass']);
                break;
            case '/html/home/settings.html':
                require(['homeSettings']);
                break;
            case '/html/teacher/add.html':
                require(['teacherAdd']);
                break;
            case '/html/teacher/list.html':
                require(['teacherList']);
                break;
        }
    });

})(window);