var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get the hello world page*/
router.get('/helloworld', function(req, res) {
	res.render('helloworld', {title: 'Hello World'})
	
});

module.exports = router;
