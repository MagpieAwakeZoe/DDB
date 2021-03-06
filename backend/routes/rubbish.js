var express = require('express');
var router = express.Router();
const dataCtrl = require('../controllers/rubbish.controller');


/* GET regist listing. */
router.post('/data', dataCtrl.create);
// router.get('/data/:id', dataCtrl.getData);
router.get('/gainData', dataCtrl.gainData);
router.get('/gainPage', dataCtrl.gainPage);
router.delete('/data/:id', dataCtrl.remove);
// router.post('/data/removes', dataCtrl.removes);
// router.put('/data/:id', dataCtrl.update);
// router.post('/list', dataCtrl.list);     //分页
// router.delete('/removes', dataCtrl.removes);
module.exports = router;


