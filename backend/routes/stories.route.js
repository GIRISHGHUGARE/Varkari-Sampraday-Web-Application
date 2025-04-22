import express from "express";
import { story } from "../controllers/stories.controller.js";

const router = express.Router();

router.get("/getStories",story);

export default router;