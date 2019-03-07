const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');

var  schema = new mongoose.Schema({
  title:String,     //文章标题
  time:String,      //文章发布时间
  author:String,    //作者
  thumbs:String,    //点赞数
  pic:String,       //插图地址
  avatar:String,    //头像地址
  collectionNum:String, //收藏数
  content:String,       //文章内容
  comments:{        //评论
      avatar:String,    //头像
      judgeMan:String,  //评论人
      judgeTime:String, //评论时间
      content:String,   //内容
      thumbs:String     //点赞数
  }
});


schema.plugin(materializedPlugin);

module.exports=mongoose.model('Diary',  schema);