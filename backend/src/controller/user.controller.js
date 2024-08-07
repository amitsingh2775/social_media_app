import { json } from 'express';
import { User } from '../models/users.model.js';
import jwt from 'jsonwebtoken'

const userSignup = async (req, res) => {
  try {
    const { Name, username, password, email } = req.body;

    if (!Name || !username || !password || !email) {
      return res.status(400).json({ message: "All fields are required",success:false });
    }

    const existUser = await User.findOne({
      $or: [{ username }, { email }]
    });

    if (existUser) {
      return res.status(409).json({ message: "Username or email already exists",success:false });
    }

    const user = await User.create({
      Name,
      username,
      email,
      password
    });

    if (!user) {
      return res.status(400).json({ message: "Failed to create user",success:false });
    }

    res.status(201).json({ data: user, message: "User created successfully",success:true });

  } catch (error) {
    res.status(500).json({ message: error.message,success:false });
  }
};

const userSignin=async(req,res)=>{
   try {
    const {email,password}=req.body
 
    if(!email || !password){
      return res.status(400).json({message:"all fields are required",success:false})
    }
    const user=await User.findOne({email})
    if(!user){
     return res.status(400).json({message:"user don't exist",success:false})
    }
 
    const isPassword=await user.isPasswordCorrect(password)
    if(!isPassword){
     return res.status(400).json({message:"password incorrect",success:false})
    }
 
    const tokenData = {
     userId: user._id
 };
 
 const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });
 
 return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict',path: '/', sameSite: 'Lax', secure: process.env.NODE_ENV === 'production' }).json({
  token:token,
  _id: user._id,
  email: user.email,
  Name: user.Name,
  username: user.username,
  success: true
});

 

   } catch (error) {
    return res.status(400).json({message:`system error${error}`,success:false})
   }
 }
export { userSignup,userSignin };
