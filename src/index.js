// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
import ConnectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({path: './env'});

ConnectDB()
.then(()=>{
  app.on("error:", (error)=>{
    console.log("Error:", error);
    throw error;
  })
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at PORT: ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("Mongo DB error failed!!", err);
})




/*
const app= express();

;( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error:", (error)=>{
      console.log("Error:",error);
      throw error;
    })
    app.listen(process.env.PORT, ()=>{
      consol.log(`App is listening on port:${process.env.PORT}`)
    })
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})()
*/