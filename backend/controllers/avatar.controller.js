const Regist = require('../models/regist.model.js');
var express = require('express');
var router = express.Router();
let fs = require('fs');
let formidable = require('formidable');
let sd = require('silly-datetime');
var path = require('path');



exports.update = function(req,res,next){
    let AVATAR_UPLOAD_FOLDER = '/avatar';
    //创建上传表单
    var form = new formidable.IncomingForm();
    //设置编码格式
    form.encoding = 'utf-8';
    //设置上传目录
    form.uploadDir = path.join(__dirname,'../public/'+ AVATAR_UPLOAD_FOLDER);
    //保留后缀
    form.keepExtensions = true;
    //文件大小
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.parse(req,function(err,fields,files){
        let filesFile = files.file
        if (err) {
        return res.json({
            status: 500,
            msg: "内部服务器错误",
            result:''
        })
        }
        // 限制文件大小 单位默认字节 这里限制大小为2m
        if (filesFile.size > form.maxFieldsSize) {
        fs.unlink(filesFile.path)
        return res.json({
            status: '1',
            msg: "图片大小不能超过2M",
            result:''
        })
        }
        //后缀名
        var extName = '';
        switch (filesFile.type) {
        case 'image/pjpeg':
            extName = 'jpg';
            break;
        case 'image/jpeg':
            extName = 'jpg';
            break;
        case 'image/png':
            extName = 'png';
            break;
        case 'image/x-png':
            extName = 'png';
            break;
        case 'image/gif':
            extName = 'gif';
            break;
        }
        if (extName.length == 0) {
        return res.json({
            status: '1',
            msg: "只支持png和jpg格式图片",
            result:''
        })
        }
        //使用第三方模块silly-datetime
        var t = sd.format(new Date(), 'YYYYMMDDHHmmss');
        //生成随机数
        var ran = parseInt(Math.random() * 8999 + 10000);
        // 生成新图片名称
        var avatarName = t + '_' + ran + '.' + extName;
        // 新图片路径
        var newPath = form.uploadDir + '/' + avatarName;
        // 更改名字和路径
            fs.rename(filesFile.path, newPath, function (err) {
                if (err) {
                    return res.json({
                        "code": 401,
                        "message": "图片上传失败"
                    })
                } else{
                //TODO:数据库查找并修改id为xxx的
                var id = req.params.id;
                let imgURL = '/static' + AVATAR_UPLOAD_FOLDER + '/' + avatarName;
                Regist.findByIdAndUpdate(id,{avatar:imgURL},{new:false}).then(data=>{
                    res.json(data);
                });
                return res.json({
                    status: "0",
                    msg: "图片上传成功",
                    result: {
                        data: AVATAR_UPLOAD_FOLDER + '/' + avatarName
                    }
                })
                }
            })
  })
}