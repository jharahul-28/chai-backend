// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
import ConnectDB from "./db/index.js";


dotenv.config({path: './env'});

ConnectDB();




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