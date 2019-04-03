const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');
var  schema = new mongoose.Schema({
  //评论内容
  content:String,
  page_id: String,   //评论的文章Id
  avatar: String
});


schema.plugin(materializedPlugin);

module.exports=mongoose.model('Scomment',  schema);