const Rubbish = require('../models/rubbish.model.js');
//增
exports.create=function(req,res,next){
    const rubbish=new Rubbish(req.body);
    rubbish.save().then(data=>{
        res.json(data);
    })
};

//删
exports.remove=function(req,res,next){
    var id=req.params.id;
    Rubbish.findByIdAndDelete(id,(err,data)=>{
        res.json(data)
    })
};

exports.removes = (req, res, next) => {
    let ids = req.body["ids"];
    Rubbish.remove({ _id: { $in: ids } }, (err, data) => {
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
    Rubbish.findByIdAndUpdate(id,{$set:req.body},{new:false}).then(data=>{
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
    
      Rubbish.paginate(queryCondition, { page: +page, limit: +limit }, function(err, result) {
        result.rows=result.docs;
        res.json(result);
      });
};



exports.getData = function(req, res, next) {
    var id = req.params.id;
    Rubbish.findById(id).then(data => {
        res.json(data);
    })
};


//获取数据集里的所有数据
exports.gainData = function(req, res, next){
    Rubbish.find().then(data => {
        res.json(data);
    })
};


//查询到用户信息
exports.gainPage = function(req, res, next) {
    const {user_id} = req.query
    Rubbish.find({user_id:user_id}).then(data => {
        res.json(data);
    })
};