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
            //下方标记
            $('#filters li a').removeClass('selected');
            //全部显示列表
            $('#main ul li').each(function(){
                    $(this).removeClass("hidden");
            });
            //隐藏部分
            if(state){
                if(state=='active'){
                    var b=true;
                }else if(state=='completed'){
                    var b=false;
                }
                $('#filters li a').filter('[href="#/'+state+'"]').addClass('selected');
                $('#main ul li').each(function(){
                    if($(this).hasClass("completed")==b){
                        $(this).addClass("hidden");
                    }
                });
            }else{
                $('#filters li a').filter('[href="#/"]').addClass('selected');
            }
        }
    });

    return TodoRouter;
});