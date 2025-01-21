import { object } from "framer-motion/client";
import mongoose, { Schema } from "mongoose";




const CourseVideoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    notes: {
        type: Schema.Types.ObjectId,
        ref: "Vnotes"

    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: "Courses"
    },
    videoUrl: {
        type: String,
        required: true,
    },
    resources: [
        {
            type: String,

        }
    ],
    Thumbnail: {
        type: String,

    },
    Vcomments: [
        {
            type: Schema.Types.ObjectId,
            ref: "comment"
        }
    ]

}, { timestamps: true })



export const CourseVideo = mongoose.model("CourseVideo", CourseVideoSchema);