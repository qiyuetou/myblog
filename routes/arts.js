var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('users/reg',{
    title:"»¶Ó­×¢²á"
  })
});

module.exports = router;
