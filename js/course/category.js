/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','template'], function ($,template) {
    $.get('/v6/category', function (data) {
        if(data.code==200){
            $('#category-tbody').append(template('category-list-tpl',{ list:data.result }));
        }
    })
});