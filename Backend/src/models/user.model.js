import mongoose, { Schema } from "mongoose";




const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trime: true,
        index: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trime: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],

    },
    mobileNum: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,

    }

}, { timestamps: true })



export const User = mongoose.model("User", userSchema);