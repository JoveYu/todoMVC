'use strict'

require.config({
	//不符合AMD标准，单独配置
	shim:{
		backbone:{
			deps:[
				'underscore',
				'jquery'
			],
			exports:'BackBone'
		},
		backboneLS:{
			deps:['backbone'],
			exports:'BackBoneLS'
		}
		underscore:{
			exports:'_'
		},
		paths:{
			jquery:'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
			underscore:'https://raw.github.com/jashkenas/underscore/master/underscore.js',
			backbone:'https://raw.github.com/jashkenas/backbone/master/backbone.js',
			backboneLS:'https://raw.github.com/jeromegn/Backbone.localStorage/master/backbone.localStorage.js'	
		}
	}
});

//主体调用
require([

])