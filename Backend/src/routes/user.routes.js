import { getUser } from "../controllers/user.controller.js";
import { Router } from "express";

import { clerkClient, requireAuth } from '@clerk/express'

const router = Router();

router.route('/protected').post(
    requireAuth(),
    getUser
)
export default router