const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');
var  schema = new mongoose.Schema({
  //评论内容
  content:String,    //评论内容
  page_id: String,   //评论的文章Id
  avatar: String,   //评论人的头像，
  niname: String,   //评论人昵称
  author: String    //用户名（邮箱）
});


schema.plugin(materializedPlugin);

module.exports=mongoose.model('Comment',  schema);