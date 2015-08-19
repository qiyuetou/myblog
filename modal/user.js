var mongoose = require('../db');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:String
},{collection:'user'})

//定义模型  用来执行与数据库的操作
var userModel = mongoose.model('user',userSchema);


function User(user){
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
}

User.prototype.save = function(callback){

    var md5 =crypto.createHash('md5');

    emailMd5 = md5.update(this.email.toLowerCase()).digest('hex');
    avatar = "https://secure.gravatar.com/avatar/"+emailMd5 +"?s=48";

    //数据库中的字段
    var newUser = new userModel({
        username : this.username,
        password : this.password,
        email  : this.email,
        avatar : avatar
    })

    //保存到数据库中去
    newUser.save(function(err,user){
        if(err){
            callback(err);
        }else{
            callback(null,user)
        }
    })
}
module.exports = User;