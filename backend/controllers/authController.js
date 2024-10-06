 const UserModel =require('../models/User.js')
 const jwt=require('jsonwebtoken');

 const Signup = async (req,res)=>{
    try {
        const {Username ,email ,password}=req.body;
        const user = await UserModel.findOne({
            $or: [
                { Username: Username },  // Checking if the email matches the Username
                { email: email }      // Checking if the email matches the email field
            ]
        });
        if(user){
            return res.status(403)
                .json({ message: "User is alraedy exist,you can login",success:false})
        }
        const userModel=new UserModel({Username,email,password});
        await userModel.save();
        res.status(201)
            .json({
                message:"signup succesfully",
                success:true
            })
    } catch (error) {
        res.status(500)
            .json({
                message:"Server error"
            })
    }
 }
 const Login = async (req,res)=>{
    try{
        const{Username,password}=req.body;
        const user= await UserModel.findOne({Username});
        if(!user){
            return res.status(402)
                .json({message:"User does not already exist",success:false})
        }
        const isPassEqual= (password==user.password) ? 1 : 0 ;
        if(!isPassEqual){
            return res.status(403)
                .json({message:"incorrect password",success:false})
        }
        const jwtToken=jwt.sign(
            { Username:user.Username, _id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'24h'}
        )
        res.status(200)
            .json({
                message:"Login succesfully",
                success:true,
                jwtToken,
                Username,
                email:user.email
            })

    }
    catch(err){
        res.status(500)
            .json({
                message:"Server error"
            })
    }

 }

 module.exports={
    Signup,
    Login
 }