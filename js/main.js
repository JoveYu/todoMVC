'use strict'

require.config({
    //不符合AMD标准，单独配置
    shim:{
        backbone:{
            deps:[
                'underscore',
                'jquery'
            ],
            exports:'Backbone'
        },
        backboneLS:{
            deps:['backbone'],
            exports:'BackBoneLS'
        },
        underscore:{
            exports:'_'
        }   
    },
    paths:{
        jquery:'lib/jquery.min',
        underscore:'lib/underscore',
        backbone:'lib/backbone',
        backboneLS:'lib/backbone.localStorage'    
    }
});

//主体调用
require([
    'appview'
],function(AppView){
    new AppView();
})