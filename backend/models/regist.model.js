const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');
var  schema = new mongoose.Schema({
  email:String,
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
  } 
});


schema.plugin(materializedPlugin);

module.exports=mongoose.model('Regist',  schema);