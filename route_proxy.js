var express = require('express');
var router = express.Router();

var jdHeaderParser = require('./middlewares/header-parser')
var ctrl = require('./controllers/main')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', ctrl.index)

router.get(/(mall|yhd|wq)\/(active|event)\/([\da-zA-Z]{3,})\/index.html/, [jdHeaderParser], ctrl.main)

module.exports = router;