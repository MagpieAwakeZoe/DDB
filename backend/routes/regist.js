var express = require('express');   //引入express
var router = express.Router();  //使用express下的路由
const dataCtrl = require('../controllers/regist.controller');   //导入user.controller


/* GET regist listing. */
router.post('/data', dataCtrl.create);
router.get('/data/:id', dataCtrl.getData);
router.get('/gainData', dataCtrl.gainData);
router.get('/gainPage', dataCtrl.gainPage);     //设置查找的路由
router.delete('/data/:id', dataCtrl.remove);
router.post('/data/removes', dataCtrl.removes);
router.put('/data/:id', dataCtrl.update);
router.post('/list', dataCtrl.list);     //分页
router.delete('/removes', dataCtrl.removes);
router.post('/login', dataCtrl.userLogin);    //用户登录判断
module.exports = router;        //导出路由


