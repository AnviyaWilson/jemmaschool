var mongoose=require('mongoose')
// scheme creation 
  var signupSchema= mongoose.Schema({
   Username:String,
   Email:String,
   Password:String,
  });
  //model creation
  var signupModel = mongoose.model("signup" , signupSchema);
  // exporting the model
  module.exports = signupModel;