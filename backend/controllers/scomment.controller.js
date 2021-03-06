const Scomment = require('../models/scomment.model.js');
//增
exports.create=function(req,res,next){
    const scomment=new Scomment(req.body);
    scomment.save().then(data=>{
        res.json(data);
    })
};

//删
exports.remove=function(req,res,next){
    var id=req.params.id;
    Scomment.findByIdAndDelete(id,(err,data)=>{
        res.json(data)
    })
};

exports.removes = (req, res, next) => {
    let ids = req.body["ids"];
    Scomment.remove({ _id: { $in: ids } }, (err, data) => {
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
    Scomment.findByIdAndUpdate(id,{$set:req.body},{new:false}).then(data=>{
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
    
      Scomment.paginate(queryCondition, { page: +page, limit: +limit }, function(err, result) {
        result.rows=result.docs;
        res.json(result);
      });
};



exports.getData = function(req, res, next) {
    var id = req.params.id;
    Scomment.findById(id).then(data => {
        res.json(data);
    })
};

exports.gainData = function(req, res, next){
    Scomment.find().then(data => {
        res.json(data);
    })
};



//查到指定文章下的评论
exports.gainScomment = function(req, res, next) {
    const {page_id} = req.query
    Scomment.find({page_id:page_id}).then(data => {
        res.json(data);
    })
};
