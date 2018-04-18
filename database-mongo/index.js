var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/doctors');
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


var doctorsSchema = mongoose.Schema({
  name: String,
  specialization: String,
  address:String,
  tel:String,
  email:String,
  rate:Number
});

var Doctor = mongoose.model('Doctor', doctorsSchema);


//comment

var userSchema = mongoose.Schema({
  name: String,
  password: String
});

var User = mongoose.model('User',userSchema);

var selectAll = function(callback) {
  Doctor.find({}, function(err, doctor) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, Doctor);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.Doctor=Doctor;
module.exports.User = User;


module.exports.Doctor=Doctor;
