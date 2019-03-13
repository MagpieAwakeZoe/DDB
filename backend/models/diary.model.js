const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');  
const Comment = require('./comment.model.js');
const Regist = require('./regist.model.js');
var Schema   = mongoose.Schema;
var  schema = new mongoose.Schema({
  title: String,     //文章标题
  author: String,
  user_id: String,
  // user_id: {type: Schema.Types.ObjectId },
  // time:{
  //   year:String,
  //   month:String,
  //   day:String,
  //   hour:String
  // },
  thumbsNum:{
    type:String,
    default:0       //点赞数
  },  
  // pic:String,       //插图地址
  // avatar:String,    //头像地址
  collectionNum:{ 
    type:String,
    default:0       //收藏数
  }, 
  commentsNum:{
    type:String,
    default:0       //评论数
  },
  content:String,       //文章内容
});


schema.plugin(materializedPlugin);

module.exports=mongoose.model('Diary',  schema);