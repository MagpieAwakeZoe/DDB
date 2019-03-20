const Story = require('../models/story.model.js');
//增
exports.create=function(req,res,next){
    const story=new Story(req.body);
    story.save().then(data=>{
        res.json(data);
    })
};

//删
exports.remove=function(req,res,next){
    var id=req.params.id;
    Story.findByIdAndDelete(id,(err,data)=>{
        res.json(data)
    })
};

exports.removes = (req, res, next) => {
    let ids = req.body["ids"];
    Story.remove({ _id: { $in: ids } }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  }; 

//改
exports.update = function(req,res,next){
    var id = req.params.id;
    Story.findByIdAndUpdate(id,{$set:req.body},{new:false}).then(data=>{
        res.json(data);
    });
};

//查


// 分页
exports.list = function(req,res,next){
    var page = req.body.page ? req.body.page : 1;
    var limit = req.body.limit ? req.body.limit : 5;
  
    var queryCondition = {};
    if (req.body.name && req.body.name.trim().length > 0) {
        name = req.body.name;
        queryCondition = {
          name: new RegExp(name,'i')
        };
      }
      console.log(typeof limit);
    
      Story.paginate(queryCondition, { page: +page, limit: +limit }, function(err, result) {
        result.rows=result.docs;
        res.json(result);
      });
};



exports.getData = function(req, res, next) {
    var id = req.params.id;
    Story.findById(id).then(data => {
        res.json(data);
    })
};

exports.gainData = function(req, res, next) {
    Story.find().then(data => {
        res.json(data);
    })
};

//查到指定用户下的文章
exports.gainPage = function(req, res, next) {
    const {user_id} = req.query
    Story.find({user_id:user_id}).then(data => {
        res.json(data);
    })
};

//查到指定用户下的文章并且修改
// exports.gainPageAndUpdate = function(req, res, next) {
//     const {user_id} = req.query;
//     Story.update({user_id:user_id},{}).then(data => {
//         res.json(data);
//     })
// };