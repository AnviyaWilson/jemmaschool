//npm init
//npm i express 
// importing express 
var express = require("express")
var bcrypt = require('bcrypt');
//Initialization
var app = express(); 
// db connection
require("./db")
// get the model file
var schools=require("./model/school")
var courses=require("./model/course")
var signups=require("./model/signup")
// middleware
app.use(express.json());
// install cors
var cors=require('cors');
const signupModel = require("./model/signup");
app.use(cors())
// port assigning
var port= 3000;




// api to get data
app.get('/',(req,res)=> {
    res.send("hello");

});
// api to add data to the database(hhtp method to add to database is post)
app.post('/',async(req,res)=>{
    try {
        await schools(req.body).save();
        res.send("Your Data has been submitted")
    } catch (error) {
        res.send(error)
    }

})
// api to get data from db
app.get("/View",async(req,res)=>{
    try {
        var data = await schools.find();
        res.send(data);
        
    } catch (error) {
        res.send(error);
        
    }
})




// api to delete a document from db
app.delete('/:id',async(req,res)=>{
    console.log(req.params.id)
    try {
        await schools.findByIdAndDelete(req.params.id);
        res.send("Student deleted")
        
    } catch (error) {
        res.send(error)        
    }
})
// api to update a document
app.put('/:id',async(req,res)=>{
    console.log(req.params.id)
    try {
        // While updating since we are giving new data we need body so we request body
        await schools.findByIdAndUpdate(req.params.id,req.body);
        res.send("Student data update")
        
    } catch (error) {
        
        res.send(error)
    }
})
//COURSES



app.put('/courses/:id', async (req, res) => {
  try {
    const updatedCourse = await courses.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).send("Error updating course");
  }
});


// === COURSE ROUTES ===

// Add a course
app.post("/courses", async (req, res) => {
  try {
    const course = new courses(req.body);
    await course.save();
    res.status(201).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all courses
app.get("/courses", async (req, res) => {
  try {
    const allCourses = await courses.find();
    res.send(allCourses);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a course by ID
app.get("/courses/:id", async (req, res) => {
  try {
    const course = await courses.findById(req.params.id);
    if (!course) return res.status(404).send("Course not found");
    res.send(course);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a course by ID
app.put("/courses/:id", async (req, res) => {
  try {
    const updatedCourse = await courses.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCourse) return res.status(404).send("Course not found");
    res.send(updatedCourse);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a course by ID
app.delete("/courses/:id", async (req, res) => {
  try {
    const deletedCourse = await courses.findByIdAndDelete(req.params.id);
    if (!deletedCourse) return res.status(404).send("Course not found");
    res.send("Course deleted");
  } catch (error) {
    res.status(500).send(error);
  }
});

//SIGNUP
 app.get('/signups',async (req,res)=>{
        try {
            var data=await signups.find();
            res.send(data);
        } catch (error) {
           res.send(error) 
        }
    })
 // api to delete a document from db
 app.delete ("/signups/:id", async(req,res)=>{
    console.log(req.params.id)
    try {
        await signups.findByIdAndDelete(req.params.id);
        res.send("data deleted")
    } catch (error) {
        res.send(error);
        
    }
 }

 )
//api to  update a document
app.put("/signups/:id",async(req,res)=>{
    try {
        await signups.findByIdAndUpdate(req.params.id,req.body )
        res.send("students data update")
    } catch (error) {
        res.send(error)
    }
})


app.post("/signup", async (req, res) => {
  try {
    const { Username, Email, Password } = req.body;
     if (!Username || !Email || !Password) {
      return res.status(400).send("All fields are required");
    }

    // ✅ 1. Check if user with same email or username exists
    const existingUser = await signupModel.findOne({
      $or: [{ Email }, { Username }]
    });
    

    if (existingUser) {
      return res.status(409).send("Username or Email already exists");
    }

    // ✅ 2. Hash password
   

    // ✅ 3. Save new user
    const newUser = new signupModel({
      Username,
      Email,
      Password
    });

    await newUser.save();

    res.status(201).send("Signup successful");
  } catch (error) {
    console.error(error);
    res.status(500).send("Signup failed: " + error.message);
  }
});
//LOGIN

app.post("/login", async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await signupModel.findOne({ Email });

    if (!user) {
      return res.status(404).send("User not found");
    }

    if (user.Password !== Password) {
      return res.status(401).send("Invalid password");
    }

    // ✅ Success
    res.status(200).send("Login successful");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


//EMAIL
const nodemailer = require("nodemailer");

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).send("Missing required fields");
  }

  // Configure transporter (use your credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hanmsam24@gmail.com',         // Replace with your email
      pass: 'prge lfbq gicq odtg'             // Use App Password if 2FA is enabled
    }
  });

  const mailOptions = {
    from: 'hanmsam24@gmail.com',
    to,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});



// server in listening state
app.listen(port,()=>{
    console.log(`Server is up and running in ${port}`);
})