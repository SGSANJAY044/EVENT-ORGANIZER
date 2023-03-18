
import express from 'express';
import mongoose from 'mongoose';
import router from './route/route.js';


const app=express();
app.use(express.json());
app.use("/api/user",router);
mongoose.connect('mongodb+srv://sanjays:3zfS1TcwaCkz7k4m@cluster0.sgoxfkk.mongodb.net/test')
.then(()=>app.listen(5000))
  .then(()=>console.log("connetted to mogodb"))
  .catch((err)=>console.log(err));





