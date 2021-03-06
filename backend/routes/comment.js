var express = require('express');
var router = express.Router();
const dataCtrl = require('../controllers/comment.controller');


/* GET diary listing. */
router.post('/data', dataCtrl.create);
router.get('/data/:id', dataCtrl.getData);
router.get('/gainData', dataCtrl.gainData);
router.get('/gainComment', dataCtrl.gainComment);
router.delete('/data/:id', dataCtrl.remove);
router.post('/data/removes', dataCtrl.removes);
router.put('/data/:id', dataCtrl.update);
router.post('/list', dataCtrl.list);     //分页
router.delete('/removes', dataCtrl.removes);
module.exports = router;

