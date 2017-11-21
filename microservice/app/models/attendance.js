// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Attendance = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('Attendance', Attendance);
