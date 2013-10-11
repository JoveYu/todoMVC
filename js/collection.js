define([
    'backbone',
    'backboneLS',
    'model'
],function(BackBone,BackBoneLS,TodoModel){
    var TodoCollection = BackBone.Collection.extend({
        model:TodoModel,

        //保存
        localStorage:new BackBoneLS('todo'),

        //根据flag判断是否完成
        completed:function(){
            return this.filter(function(t){
                return t.get('flag');           
            });
        },
        //反选未完成
        active:function(){
            return this.without.apply(this, this.completed());
        }
    });
    return new TodoCollection();
});