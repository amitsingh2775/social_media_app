import mongoose,{Schema} from "mongoose";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const UserSchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        unique:true,
        required:true

    }
})

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")){
     return next();
    }
    this.password=await bcrypt.hash(this.password,12)
    next();
 })
 
 UserSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}

export const User=mongoose.model("User",UserSchema)