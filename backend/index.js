const express=require('express');
const cors=require('cors');
const app=express();
const authRoutes =require('./routes/authRoutes.js');

require('dotenv').config();
require("./config/db.js")

//middlewares
app.use(express.json());
app.use(cors());

const PORT=5000;

app.use("/auth",authRoutes);


app.listen(PORT,()=>{
    console.log("Server running on port :",PORT);
}) 