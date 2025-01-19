import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { clerkClient } from "@clerk/express";


const getUser = asyncHandler(async (req, res) => {
    const { userId } = getAuth(req)

    if (!userId) {
        throw new ApiError("userId not found", 401)
    }
    const user = await clerkClient.users.getUser(userId)

    if (!user) {
        throw new ApiError("User not found", 404)
    }
    return res.status(201).json(
        new ApiResponse(200, user, " user details fetched successfully ")
    )
})

export {
    getUser,
}