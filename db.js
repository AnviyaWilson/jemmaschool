
// 1.mongoose installl=> npm i mongoose
var mongoose= require("mongoose");
//mongoose.connect("url").then(()=>{}).catch(()=>{})
mongoose.connect("mongodb+srv://chrishann24:hannahmaria@cluster0.vuv7ngz.mongodb.net/?appName=Cluster0"
)
.then(()=>{
    console.log("Db connected")
})
.catch((err)=>{
    console.log(err)
});