const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');
const Regist = require('./regist.model.js');
const Diary = require('./diary.model.js');
var Schema   = mongoose.Schema;
var  schema = new mongoose.Schema({
  //评论内容
  content:String,
  page: { type: Schema.Types.ObjectId }   //评论的哪篇文章
});


schema.plugin(materializedPlugin);

module.exports=mongoose.model('Comment',  schema);