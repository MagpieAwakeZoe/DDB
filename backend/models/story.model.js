const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');  
var  schema = new mongoose.Schema({
  title: String,     //文章标题
  author: String,
  user_id: String,
  avatar: String,
  niname: {
    type:String,
    default:'一位不知情的路人'       
  },
  time:{
    year:String,
    month:String,
    day:String,
    hour:String
  },
  commentsNum:{
    type:String,
    default:0       //评论数
  },
  browseNum:{
    type:String,
    default:0       //浏览数
  },
  content:String,       //文章内容
});


schema.plugin(materializedPlugin);

module.exports=mongoose.model('Story',  schema);