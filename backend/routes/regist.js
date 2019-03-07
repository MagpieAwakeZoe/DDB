var express = require('express');
var router = express.Router();
const dataCtrl = require('../controllers/regist.controller');


/* GET regist listing. */
router.post('/data', dataCtrl.create);
router.get('/data/:id', dataCtrl.getData);
router.get('/gainData', dataCtrl.gainData);
router.delete('/data/:id', dataCtrl.remove);
router.post('/data/removes', dataCtrl.removes);
router.put('/data/:id', dataCtrl.update);
router.post('/list', dataCtrl.list);     //分页
router.delete('/removes', dataCtrl.removes);
router.post('/login', dataCtrl.userLogin);    //用户登录判断
module.exports = router;


