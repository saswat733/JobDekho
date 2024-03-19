import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({

    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    refreshToken: String,
    userProfile:{type:mongoose.Schema.Types.Mixed},
},
    {
        timestamps: true,

})

userSchema.pre('save',function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password=bcrypt.hashSync(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect=function (password){
    return bcrypt.compareSync(password,this.password);
}

userSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname,
    },
        process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign({
        _id:jwt._id,
    },
    process.env.REFRESH_ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY,
    }
    )
}
export const User = mongoose.model('User', userSchema);