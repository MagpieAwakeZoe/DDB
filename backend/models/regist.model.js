const mongoose = require('mongoose');//引入mongoose使用mongoose
var  schema = new mongoose.Schema({ //实例化mongoose的结构Schema
  email:String,   //各个字段设置
  password:String,
  niname: { 
    type:String,
    default:'一位不知名的路人'       
  }, 
  sex: { 
    type:String,
    default:'未录入'       
  }, 
  birthday: { 
    type:String    
  }, 
  area: { 
    type:String,
    default:'未录入'       
  }, 
  Introduction: { 
    type:String,
    default:'您还没有自我介绍呢'       
  },
  avatar: {
    type:String,
    default:'/static/image/noAvatar.jpg'
  }
});
module.exports=mongoose.model('Regist',  schema);//导出这个modal暴露给外界