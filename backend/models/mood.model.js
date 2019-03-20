const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');  
var  schema = new mongoose.Schema({
  author: String,
  niname: String,
  user_id: String,
  moodNow: String,
  time:{
    year:String,
    month:String,
    day:String,
    hour:String
  },
  // pic:String,       //插图地址
  // avatar:String,    //头像地址
  commentsNum:{
    type:String,
    default:0       //评论数
  },
  content:String,       //文章内容
});


schema.plugin(materializedPlugin);

module.exports=mongoose.model('Mood',  schema);