const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');

var  schema = new mongoose.Schema({
  title:String,     //文章标题
  time:{
    year:String,
    month:String,
    day:String,
    hour:String
  },
  author:String,    //作者
  thumbs:String,    //点赞数
  pic:String,       //插图地址
  avatar:String,    //头像地址
  collectionNum:String, //收藏数
  content:String,       //文章内容
});


schema.plugin(materializedPlugin);

module.exports=mongoose.model('Diary',  schema);