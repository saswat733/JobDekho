import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import uploadOnClodinary from '../utils/cloudinary.js'
import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7,
    domain:
      process.env.NODE_ENV === "production" ? "noobnarayan.in" : "localhost",
  };
  

//generate refresh and access token

const genrateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            console.log("user not found");
            throw new ApiError(404, 'user not found');
        }
        
        //generate refreesh and access token
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        
        // console.log(accessToken)
        //stores refresh token in database
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken };

    } catch (error) {
        console.log("error in generateAccessAndRefreshToken:", error);
        throw new ApiError(500, 'something went wrong while generating refresh and access Token');
    }
}

const registerUser = asyncHandler(async (req, res) => {
    //    console.log("reached")
    const { email, password, role, userProfile } = req.body;
    // console.log(email)
    if ([email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "all fields are required");
    }
    // console.log(email)

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new ApiError(409, "user already exists");
    }

    const username = email.split("@")[0];

    const user = await User.create({
        email: email.toLowerCase(),
        username: username.toLowerCase(),
        password,
        role,
        userProfile,
    })

    const createdUser = await User.findById(user._id).select("-password -refreshtoken")

    if (!createdUser) {
        throw new ApiError(500, "something went wrong while registering the user");
    }
    return res
        .status(200)
        .json(new ApiResponse(200, user, "User registered successfully"));

})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        throw new ApiError(400, "Email is required")
    }

    if (!password) {
        throw new ApiError(400, "Password is required")
    }

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
        throw new ApiError(400, "User not found")
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);

    if (!isPasswordCorrect) {
        throw new ApiError(401, "Invalid user credentials");
    }

    const { refreshToken, accessToken } = await genrateAccessAndRefreshToken(user._id);
    
    const loggedInUser=await User.findById(user._id).
    select("-password -refreshToken")

    return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
        new ApiResponse(
            200,
            {
                user:loggedInUser,accessToken,
                refreshToken
            },
            "User logged In Successfully"
        )
    )
    

})

const logOutUser=asyncHandler(async (req,res)=>{
    console.log('h')
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset:{
                refreshToken:1,
            },
        },
        {
            new:true,
        }
    )
    
    return res
    .status(200)
    .clearCookie("accessToken",cookieOptions)
    .clearCookie("refreshToken",cookieOptions)
    .json(new ApiResponse(200,{},"User logged out"))
})

const getUserProfile=asyncHandler(async(req,res)=>{
    return res.status(200)
    .json(new ApiResponse(200,req.user,"user fetched successfully"))
})



export {
    registerUser,
    loginUser,
    logOutUser,
    getUserProfile
}