const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');
const Diary = require('./diary.model.js');
var Schema   = mongoose.Schema;
var  schema = new mongoose.Schema({
  email:String,
  password:String
});


schema.plugin(materializedPlugin);

module.exports=mongoose.model('Regist',  schema);