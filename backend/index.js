const express=require('express');
const cors=require('cors');
const app=express();
const authRoutes =require('./routes/authRoutes.js');
const eventRoutes =require('./routes/eventRoutes.js');
<<<<<<< HEAD
const requestRoutes=require('./routes/requestRoutes.js')
const profileRoutes=require('./routes/profileRoutes.js')
=======
const newsRoutes=require('./routes/newsRoutes.js')
>>>>>>> 568ecf7561fd870ef672c13b156a78db7978a634

require('dotenv').config();
require("./config/db.js")

//middlewares
app.use(express.json());
app.use(cors());

const PORT=5000;


app.use("/auth",authRoutes);
app.use("/event",eventRoutes);
<<<<<<< HEAD
app.use('/request',requestRoutes);
app.use('/profile',profileRoutes);
=======
app.use("/news",newsRoutes);


>>>>>>> 568ecf7561fd870ef672c13b156a78db7978a634


app.listen(PORT,()=>{
    console.log("Server running on port :",PORT);
}) 