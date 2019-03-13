const Regist = require('../models/regist.model.js');
//增
exports.create=function(req,res,next){
    const regist=new Regist(req.body);
    regist.save().then(data=>{
        res.json(data);
    })
};

//删
exports.remove=function(req,res,next){
    var id=req.params.id;
    Regist.findByIdAndDelete(id,(err,data)=>{
        res.json(data)
    })
};

exports.removes = (req, res, next) => {
    let ids = req.body["ids"];
    Regist.remove({ _id: { $in: ids } }, (err, data) => {
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
    Regist.findByIdAndUpdate(id,{$set:req.body},{new:false}).then(data=>{
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
    
      Regist.paginate(queryCondition, { page: +page, limit: +limit }, function(err, result) {
        result.rows=result.docs;
        res.json(result);
      });
};



exports.getData = function(req, res, next) {
    var id = req.params.id;
    Regist.findById(id).then(data => {
        res.json(data);
    })
};


//获取数据集里的所有数据
exports.gainData = function(req, res, next){
    Regist.find().then(data => {
        res.json(data);
    })
};

// 用户登录的用户名和密码匹配
exports.userLogin = function (req, res, next) {
    var userEmail = req.body.email;
    var userPwd = req.body.password;
    Regist.findOne({email: userEmail}, function (err, content) {
        if (err) {
            return res.json({status: 0, msg: err || '登录失败'});
        } else {
            if (content.password === userPwd) {
                return res.json({status: 1, msg: "登录成功", content: content});
            } else  {
                return res.json({status: 2, msg: "登录失败，密码错误"});
            }
        }
    });
};
