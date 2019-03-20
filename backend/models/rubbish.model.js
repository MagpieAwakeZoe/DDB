const mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');
var  schema = new mongoose.Schema({
  title: String,
  content: String,
  user_id: String
});


schema.plugin(materializedPlugin);

module.exports=mongoose.model('Rubbish',  schema);