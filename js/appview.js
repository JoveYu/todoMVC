define([
    'jquery',
    'underscore',
    'backbone',
    'todoview',
    'collection',
],function($,_,Backbone,TodoView,TodoCollection){
    'use strict';
    var AppView = Backbone.View.extend({
        //使用已有结构.
        el:$("#todoapp"),
        //app模板
        template:'',
        events:{
            'keypress #new-todo':'add_new_todo',
            'click #clear-completed':'clear_todo',
        },
        initialize:function(){
            this.input = this.$("#new-todo");

            TodoCollection.bind('add', this.add_todo, this);
            TodoCollection.bind('all', this.render, this);
 
            TodoCollection.fetch();
        },
        render:function(){
            var active_num = TodoCollection.active().length;
            var completed_num = TodoCollection.completed().length;
            $('#todo-count strong').html(active_num);
            $('#clear-completed').html('Clear completed ('+completed_num+')');

        },
        add_todo:function(todo) {
            var view = new TodoView({
                model : todo
            });
            this.$("#todo-list").append(view.render().el);
        },
        add_new_todo:function(e){
            if(e.keyCode != 13)
                return;
            if(!this.$("#new-todo").val().trim())
                return;
            TodoCollection.create({
                memo:this.$("#new-todo").val().trim(),
                flag:false
            });
            this.$("#new-todo").val('');
        },
        clear_todo:function(){
            _.invoke(TodoCollection.completed(),'destroy');
        }
    });
    return AppView;
})