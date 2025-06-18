import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const createToken = (id) => {
        return jwt.sign({id},process.env.JWT_SECRECT)
}

// Route for user login
const loginUser = async (req,res) => {
        try{
                const {email,password} = req.body;
                const user = await userModel.findOne({email});
                if(!user){
                        return res.status(404).json({success:false,message:"User doesn't exists"})
                }
                const isMatch = await bcrypt.compare(password, user.password)
                if(isMatch){
                        const token = createToken(user._id)
                        return res.status(200).json({success:true,token})       
                }
                else{
                        return res.status(401).json({success:false, message:"Credentials don't match"})
                }
        }
        catch(error){
                console.log(error);
                return res.status(500).json({success:false,message:error.message})
        }
}

//Router for user registration
const registerUser = async (req,res) => {
      try{
        const {name,email,password} = req.body;
        // checking user already exists or not 
        const exists = await userModel.findOne({email})
        if(exists){
                return res.status(409).json({success:false, message:"User already exists"})
        }

        //Validating email format and strong password
        if(!validator.isEmail(email)){
                return res.json({success:false, message:"Please enter a valid email"})
        }
        if(password.length < 8){
                return res.json({success:false, message:"Please enter a strong password"})
        }


        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)
        const newUser = new userModel({
                name,
                email,
                password:hashedpassword
        })
        const user = await newUser.save()

        //generating token 
        const token = createToken(user._id)
        res.status(201).json({success:true,token})
      }
      catch(error){
                console.log(error);
                return res.status(500).json({success:false,message:error.message})
      }
}

//Route for admin login 
const adminLogin = async (req,res) => {
        
}

export {loginUser,registerUser,adminLogin}