import express from "express";
import { signin, signup, logout } from "../controllers/auth.js";
import {googleAuth} from "../controllers/auth.js";

const router=express.Router();

//create user
router.post("/signup",signup);

//sign in
router.post("/signin",signin);

//google
router.post("/google",googleAuth)

//logout
router.post("/logout",logout);

export default router;
 