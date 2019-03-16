const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');
var  schema = new mongoose.Schema({
  email:String,
  password:String
});


schema.plugin(materializedPlugin);

module.exports=mongoose.model('Regist',  schema);