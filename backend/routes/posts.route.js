import express from "express";
import { addPost, getPost } from "../controllers/posts.controller.js";

const router = express();

router.post("/addPost",addPost);
router.get("/getPost",getPost)

export default router;