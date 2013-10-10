define([
	'backbone',
	'backboneLS',
	'model'
],function(BackBone,BackBoneLS,Model){
	var TodoCollection = BackBone.Collection.extend({
		model:Todo,
		localStorage:new BackBoneLS,

		//根据flag判断是否完成
		completed_todo:function(){
			return this.filter(function(t){
				if (t.get('flag')==1){
					return true;				
				}else{
					return false;
				}
			});
		},
		//反选未完成
		active_todo:function(){
			return this.without.apply(this, this.completed());
		}
	});
	return new TodoCollection();
});