require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Schema / Model
const Form = mongoose.model("Form",{
  name:String,
  class:String,
  roll:String,
  phone:String
});

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// POST route
app.post("/form", async (req,res)=>{
  try {
    console.log(req.body);
    await Form.create(req.body);
    res.send("Data Saved");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving data");
  }
});

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});




// Old Code
// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // MongoDB connect
// mongoose.connect(process.env.MONGO_URL)
// .then(()=>console.log("MongoDB Connected"))
// .catch(err=>console.log(err));

// // Schema / Model
// const Form = mongoose.model("Form",{
//   name:String,
//   class:String,
//   roll:String,
//   phone:String
// });

// // Route
// app.post("/form", async (req,res)=>{
//   await Form.create(req.body);
//   res.send("Data Saved");
// });

// // Server start
// app.listen(5000, ()=>{
//   console.log("Server running on port 5000");
// });