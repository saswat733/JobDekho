import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import uploadOnClodinary from '../utils/cloudinary.js'
import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'
import mongoose from 'mongoose'


//generate refresh and access token

const genrateAccessAndRefreshToken=async(userId)=>{
    try {
        const user=await User.findById(userId)

        if(!user){
            console.log("user not found");
            throw new ApiError(404,'user not found');
        }

        //generate refreesh and access token
        const accessToken=user.generateAccessToken();
        const refreshToken=user.generateRefreshToken();

        //stores refresh token in database
        user.refreshToken=refreshToken;
        await user.save({validateBeforeSave:false})
        
        return {accessToken,refreshToken};
        
    } catch (error) {
        console.log("error in generateAccessAndRefreshToken:",error);
        throw new ApiError(500,'something went wrong while generating refresh and access Token');   
    }
}

const registerUser=asyncHandler(async(req,res)=>{
   console.log("reached")
   const { email, password ,role} = req.body;
    console.log(email)
    if([email,password].some((field)=>field?.trim()==="")){
        throw new ApiError(400,"all fields are required");
    }
    console.log(email)

    const existingUser=await User.findOne({email});

    if(existingUser){
        throw new ApiError(409,"user already exists");
    }

    const username=email.split("@")[0];

    const user=await User.create({
        email:email.toLowerCase(),
        username:username.toLowerCase(),
        password,
        role,
    })

    const createdUser=await User.findById(user._id).select("-password -refreshtoken")

    if(!createdUser){
        throw new ApiError(500,"something went wrong while registering the user");
    }
    return res
    .status(200)
    .json(new ApiResponse(200, user, "User registered successfully"));

})

export {
    registerUser
}