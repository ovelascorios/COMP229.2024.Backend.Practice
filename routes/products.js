var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Hello from the route of products router');
  });
  
  router.get('/laptop', function(req, res, next) {
    res.send('This is the laptop endpoint');
  });
  
  module.exports = router;