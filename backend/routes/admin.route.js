import express from "express"; /*nodejs framework*/
import { getUsers,addProduct,addStory, adminSignup, adminLogin } from "../controllers/admin.controller.js"; /*getting controllers*/

const router = express.Router(); /*new router instance*/

router.post("/addProduct",addProduct)
router.post("/addStory",addStory)
router.post("/signup",adminSignup) /*adding routes*/
router.get("/login",adminLogin) /*adding routes*/
router.get("/getusers",getUsers) /*adding routes*/

export default router; /*exporting routes*/