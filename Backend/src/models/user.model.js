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
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: [true, "password is required"],

    },
    mobile_no: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

}, { timestamps: true })



export const User = mongoose.model("User", userSchema);