define([
    'jquery',
    'underscore',
    'backbone',
    'model'
],function($,_,Backbone,TodoModel){
    'use strict';
    var TodoView = Backbone.View.extend({
        el:'#todo-list',
        template_todo:'<li class="completed">'+
                        '<div class="view">'+
                            '<input class="toggle" type="checkbox" <%= flag == 1 ? "checked" : "" %>>'+
                            '<label><%- memo %></label>'+
                            '<button class="destroy"></button>'+
                        '</div>'+
                        '<input class="edit" value="<%- memo %>">'+
                    '</li>',
        template_num:'',
        events:{
            'keypress #new-todo':'add_todo',
            'click .toggle':'finish_todo',
            'dblclick label':'edit_todo',
            'click .destroy':'delete_todo',
            'keypress .edit':'update_todo',
            'click #clear-completed':'clear_all'
        },
        add_todo:function(e){
            alert(2);
            if(e.which == 13)
                alert(1)
                a=TodoModel.create(this.newAttributes());
                alert(a);
        }

    });
    return TodoView;
})