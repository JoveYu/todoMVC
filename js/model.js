define([
	'backbone'
],function(Backbone){
	'use strict';
	var TodoModel=Backbone.Model.extend({
		//默认属性
		defaults:{
			memo:'something to do',
			flag:false
		},
		toggle:function(){
			this.save({
				//处理完成和取消完成
				flag:!this.get('flag')
			});
			//console.log({flag:!this.get('flag')});
		},
		clear:function(){
            this.destroy();
        }
	});
	return TodoModel;
});