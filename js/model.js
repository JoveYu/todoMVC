define([
	'underscore',
	'backbone'
],function(_,Backbone){
	'use strict';
	var TodoModel=Backbone.Model.extend({
		//默认属性
		defaults:{
			memo:'something to do',
			flag:0
		},
		save:function(){
			this.save({
				//处理完成和取消完成
				flag:1-this.get('flag')
			});
		}
	});
	return TodoModel;
});