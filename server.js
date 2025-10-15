// Imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


// Set up
dotenv.config();

// Environment variables
const PORT = process.env.PORT || 3000;
const app = express();


// Connect DB

// Middleware
app.use(express.json());
app.use((req, _res, next)=>{
    console.log(`${req.method} - ${req.path}`);
    next();

})
// Routes

// Global error handling
app.use((err, _req, res, _next)=>{

    res.json({msg: `Error - ${err.message}`});

})

// Server listener
app.listen(PORT, ()=>{

    console.log(`Server running on the PORT: ${PORT}`);
})