const Diary = require('../models/diary.model.js');
//增
exports.create=function(req,res,next){
    const diary=new Diary(req.body);
    diary.save().then(data=>{
        res.json(data);
    })
};

//删
exports.remove=function(req,res,next){
    var id=req.params.id;
    Diary.findByIdAndDelete(id,(err,data)=>{
        res.json(data)
    })
};

exports.removes = (req, res, next) => {
    let ids = req.body["ids"];
    Diary.remove({ _id: { $in: ids } }, (err, data) => {
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
    Diary.findByIdAndUpdate(id,{$set:req.body},{new:false}).then(data=>{
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
    
      Diary.paginate(queryCondition, { page: +page, limit: +limit }, function(err, result) {
        result.rows=result.docs;
        res.json(result);
      });
};



exports.getData = function(req, res, next) {
    var id = req.params.id;
    Diary.findById(id).then(data => {
        res.json(data);
    })
};

exports.gainData = function(req, res, next) {
    Diary.find().then(data => {
        res.json(data);
    })
};

//查到指定用户下的文章
exports.gainPage = function(req, res, next) {
    console.log(typeof req.query)
    const {user_id} = req.query
    Diary.findOne({user_id:user_id}).then(data => {
        res.json({data, type:(req.query.user_id)});
    })
};

//查到指定用户下的文章并且修改
// exports.gainPageAndUpdate = function(req, res, next) {
//     const {user_id} = req.query;
//     Diary.update({user_id:user_id},{}).then(data => {
//         res.json(data);
//     })
// };