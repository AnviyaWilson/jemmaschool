var mongoose = require("mongoose")
//schema creation(to create a model)
var courseSchema = mongoose.Schema({
      Course:String,
      Description:String,
      Fee:String,



})
// model creation
// var studentModel= mongoose.model("collectionname,studentSchema")

var courseModel= mongoose.model("course",courseSchema)
// exporting the model
module.exports = courseModel;