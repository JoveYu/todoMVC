define([
    'jquery',
    'underscore',
    'backbone'
],function($,_,Backbone){
    'use strict';
    var TodoView = Backbone.View.extend({
        tagName:'li',
        template:_.template('<div class="view">'+
                            '<input class="toggle" type="checkbox" <%= flag ? "checked" : "" %>>'+
                            '<label><%- memo %></label>'+
                            '<button class="destroy"></button>'+
                        '</div>'+
                        '<input class="edit" value="<%- memo %>">'),
        template_num:'',
        events:{
            'click .toggle':'finish_todo',
            'dblclick label':'edit_todo',
            'click .destroy':'delete_todo',
            'keypress .edit':'update_todo',
        },
        initialize:function(){

            this.model.bind('change', this.render, this);
            this.model.bind('destroy', this.remove, this);
        },
        render:function(){
            $(this.el).html(this.template(this.model.toJSON()));
            //重新显示已完成
            $(this.el).toggleClass('completed', this.model.get('flag'));

            // var a=$('#filters li a.selected').attr('href').split('/')[1];
            // var b=false;
            // if(a=='active'&&this.model.get('flag')){
            //     b=true;
            // }else if(a=='completed'&&!this.model.get('flag')){
            //     b=true;
            // }
            // console.log(b)
            // $(this.el).toggleClass('hidden',b);
            this.input = this.$('.edit');
            return this
        },
        //切换标记
        finish_todo:function(){
            this.model.toggle();
        },
        //删除
        delete_todo:function(){
            this.model.clear();
        },
        //编辑
        edit_todo:function(){
            $(this.el).addClass("editing");
        },
        //保存编辑
        update_todo:function(e){
            if(e.keyCode == 13){
                var value = this.input.val().trim();
                this.model.save({
                    memo:value
                });
                $(this.el).removeClass("editing");
            }
        }
    });
    return TodoView;
})