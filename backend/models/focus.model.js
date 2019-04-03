const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');
var  schema = new mongoose.Schema({
  niname: { 
    type:String,
    default:0       
  }, 
  user_id: String,
  avatar:String
});


schema.plugin(materializedPlugin);

module.exports=mongoose.model('Focus',  schema);