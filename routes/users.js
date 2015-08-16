var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/reg', function(req, res, next) {
  res.render('user/reg',{
    title:'注册'
  })
});
router.post('user/reg', function(req, res, next) {
  res.redirect('./')
});
module.exports = router;
