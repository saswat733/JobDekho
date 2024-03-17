import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router=Router()

router.route("/signup").post(registerUser)

export default router

