// Imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { globalErr, log } from "./middlewares/middleware.js";
import connectDB from "./db/conn.js";


// Set up
dotenv.config();

// Environment variables
const PORT = process.env.PORT || 3000;
const app = express();


// Connect DB
connectDB();

// Middleware
app.use(express.json());
app.use(log);

// Routes

// Global error handling
app.use(globalErr);

// Server listener
app.listen(PORT, ()=>{

    console.log(`Server running on the PORT: ${PORT}`);

})