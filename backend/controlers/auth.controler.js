import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
export const signUp=async(req,res,next)=>{
    const {username,email,password}=req.body
    const hashPassword=bcrypt.hashSync(password,10);
    const newUser=new User({username,email,password:hashPassword})
    try{

        await newUser.save()
         res.status(201).json({message:"created successfully"});
        
    }catch(err){
        next(err)
    }
}


export const signin=async(req,res,next)=>{
        const{email,password}=req.body
        try{
            const validUser=await User.findOne({email})
            if(!validUser) return next(errorHandler(404,"user not found"))
            const validPassword=bcrypt.compareSync(password,validUser.password)
            if(!validPassword) return next(errorHandler(401,"invalid credentials"))
            
            const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET_KEY)
            const {password:pass,...rest}=validUser._doc
        res.cookie("access_token",token,{httpOnly:true})
        .status(200)
        .json(rest)
        }catch(err){
            next(err)
        }
}