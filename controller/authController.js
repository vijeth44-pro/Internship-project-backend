import user from "../models/userSchema.js";
import bcrypt, { compare } from "bcrypt";
import jwt from 'jsonwebtoken'

const SECRETKEY = 'lordKey'

export const registerUser = async (req, res) => {
  try {
    const { username, useremail, userphone, userpassword } = req.body;

    //validations
    const existingUser = await user.findOne({ email: useremail });
    if (existingUser){
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    //hash password
    const hashedPassword = await bcrypt.hash(userpassword, 10);


    const newUser = await user.create({
      name: username,
      email: useremail,
      phone: userphone,
      password: hashedPassword
    });
    res.status(200).json({
      success: true,
      message: "User added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in adding User",
    });
  }
};

export const loginUser = async (req,res) => {
  try {
    const { useremail,userpassword } = req.body;

    const userData = await user.findOne({ email : useremail})
    if(!userData){
      return res.status(500).json({
        success:false,
        message:"User not found"
      })
    }
    const isPasswordMatch = await bcrypt.compare(userpassword, userData.password);
    if(!isPasswordMatch){
      return res.status(500).json({
        success:false,
        message:"Invalid Password"
      })
    }

    //token generate
    //to generate token we use sign
    //with {payload},secretkey,and {expiry} which is optional
    // {expiresIn:"1d"}
    const token = await jwt.sign({id:userData._id, name:userData._name},SECRETKEY)


    res.status(200).json({
      success:true,
      message:"User logged in Successfully",
      token:token
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message:'Error in login'
    })
  }
}