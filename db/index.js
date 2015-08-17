var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/myblog");
module.exports = mongoose;