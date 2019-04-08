const mongoose = require('mongoose');//引入mongoose使用mongoose
var  schema = new mongoose.Schema({ //实例化mongoose的结构Schema
  email:String,   //各个字段设置
  password:String,
  niname: { 
    type:String,
    default:0       
  }, 
  sex: { 
    type:String,
    default:0       
  }, 
  birthday: { 
    type:String,
    default:0       
  }, 
  area: { 
    type:String,
    default:0       
  }, 
  Introduction: { 
    type:String,
    default:0       
  },
  avatar: {
    type:String,
    default:'/static/image/noAvatar.jpg'
  }
});
module.exports=mongoose.model('Regist',  schema);//导出这个modal暴露给外界