/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','util','template'], function ($,util,template) {
    function categoryManage() {
        this.cg_id=util.getQueryString('cg_id');
        this.isEdit=!!this.cg_id;
        this.selectorTpl='category-list-tpl';
        this.selectorTplParent='.course-category';
        this.selectorform='#category-manage-form';
        this.getCategoryEditUrl='/v6/category/edit';
        this.submitUrl=this.isEdit?'/v6/category/modify':'/v6/category/add';
        this.init();
    }
    categoryManage.prototype={
        // 页面初始化
        init: function () {
            var self=this;
            this.getRenderData(function (data) {
                self.render(data);
                self.onSubmit();
            });
        },
        // 获取模板所需数据，因为设计到异步获取数据，所以需要一个回调函数来接收
        getRendreData: function (fn) {
            if(this.isEdit){
                $.get(this.getCategoryEditUrl,{cg_id:this.cg_id}, function (data) {
                    if(data.code==200){
                        fn(data.result);
                    }
                });
            }else{
                fn({});
            }
        },
        // 渲染模板到页面
        render: function (data) {
            $(this.selectorTplParent).html(template(this.selectorTpl,data));
        },
        // 获取表单提交的数据
        getSubmitData: function () {
            return this.isEdit?($(this.selectorform).serialize()+"&cg_id="+this.cg_id):$(this.selectorform).serialize();
        },
        // 监听页面submit事件，转为ajax方式提交数据
        onSubmit: function () {
            var self=this;
            // 里面的this指向form表单，需要缓存categoryManage实例，才能访问对应属性与方法
            $(this.selectorform).on('submit', function () {
                $.ajax({
                    url:self.submitUrl,
                    type:'post',
                    data:self.getSubmitData(),
                    success: function (data) {
                        if(data.code==200){
                            location.href='/html/course/category.html';
                        }
                    }
                });
                return false;
            });
        }
    };
    // 创建实例，会自动调用初始化方法
    new categoryManage();
});