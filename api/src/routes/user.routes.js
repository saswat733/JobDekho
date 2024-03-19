import { Router } from "express";
import { getUserProfile, logOutUser, loginUser, registerUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router=Router()

router.route("/signup").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(verifyJWT,logOutUser)
router.route("/getUserProfile").get(verifyJWT,getUserProfile)

export default router

