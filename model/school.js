var mongoose = require("mongoose")
//schema creation(to create a model)
var schoolSchema = mongoose.Schema({
      Name:String,
      DOB:String,
      Address:String,
      BloodGroup:String,
      Course:String,
      Religion:String,
      PhoneNumber:Number,
      Email_id:String,
      SSLCPercentage:Number, 

})
// model creation
// var studentModel= mongoose.model("collectionname,studentSchema")

var schoolModel= mongoose.model("school",schoolSchema)
// exporting the model
module.exports = schoolModel;
