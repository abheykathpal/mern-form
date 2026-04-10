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

// Route
app.post("/form", async (req,res)=>{
  await Form.create(req.body);
  res.send("Data Saved");
});

// Server start
app.listen(5000, ()=>{
  console.log("Server running on port 5000");
});