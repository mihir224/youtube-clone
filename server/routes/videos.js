import express from "express";
import {addVideo,updateVideo,deleteVideo,findVideo, updateView, showRandom, showTrending, showSubscribed, getByTag, search} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router=express.Router();

router.post("/add",verifyToken,addVideo);
router.put("/update/:id",verifyToken,updateVideo);
router.delete("/delete/:id",verifyToken,deleteVideo);
router.get("/find/:id",findVideo);
router.put("/view/:id",verifyToken,updateView);
router.get("/random",showRandom);
router.get("/trending",showTrending);
router.get("/subscribed",verifyToken,showSubscribed);
router.get("/tags",getByTag);
router.get("/search",search);


export default router;
 