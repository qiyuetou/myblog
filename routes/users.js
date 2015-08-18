var express = require('express');
var User = require('../modal/User');
var router = express.Router();

/* GET users listing. */
router.get('/reg', function(req, res, next) {
  res.render('user/reg',{
    title:'注册',
    error:req.flash('error').toString()
  })
});
router.post('/reg', function(req, res, next) {

  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var password_repeat = req.body.password_repeat;
  if(!username){
    req.flash('error','用户信息不能为空')
    return res.redirect('back');
  }
  if(!password || !password_repeat){
    req.flash('error','密码不能为空');
    return res.redirect('back');
  }
  if(password !== password_repeat){
    req.flash('error','两次输入密码不一致');
    return res.redirect('back');
  }

  var md5 = crypto.createHash('md5');
  password = md5.update().digest('hex');
  var newUser = new User({
    username:username,
    password:password,
    email:req.body.email
  })
  newUser.save(function(err,user){
      if(err){
        req.flash('error','注册失败');
        return res.redirect('back');
      }else{
        req.session.user
        req.flash('success','注册成功');
        res.redirect('/');
      }
  })
  res.redirect('/')
});
module.exports = router;
