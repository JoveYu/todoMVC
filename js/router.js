define([
    'jquery',
    'backbone',
    'collection'
],function(_,Backbone,TodoCollection){
    'use strict';

    var TodoRouter=Backbone.Router.extend({
        routes:{
            '*state':'change_state'
        },
        change_state:function(state){
            $('#filters li a').removeClass('selected')
            //隐藏全部
            if(state){
                $('#filters li a').filter('[href="#/'+state+'"]').addClass('selected');
            }else{
                $('#filters li a').filter('[href="#/"]').addClass('selected');
            }
        }
    });

    return TodoRouter;
});