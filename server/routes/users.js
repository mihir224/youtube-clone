import express from "express";
import {update,deleteUser,findUser,subscribe,unsubscribe,like,dislike} from "../controllers/user.js";
import {verifyToken} from "../verifyToken.js";

const router=express.Router();

//update user
router.put("/update/:id",verifyToken,update);

//delete user
router.delete("/delete/:id",verifyToken,deleteUser);

//get a user
router.get("/find/:id",findUser);

//subscribe to a user
router.put("/sub/:id",verifyToken,subscribe);

//unsubscribe from a user
router.put("/unsub/:id",verifyToken,unsubscribe);

//like video
router.put("/like/:videoId",verifyToken,like);

//dislike video
router.put("/dislike/:videoId",verifyToken,dislike);

export default router;
 