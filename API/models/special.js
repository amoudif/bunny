var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var special = new Schema({
name:{
 type:String,
 required:false
},
description:{
 type:String,
 required:false
}
});
module.exports = mongoose.model('special', special);