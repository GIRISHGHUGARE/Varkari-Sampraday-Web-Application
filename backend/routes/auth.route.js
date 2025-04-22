import express from "express"; /*nodejs framework*/
import {getCurrentUser, login, logout, signup } from "../controllers/auth.controller.js"; /*getting controllers*/

const router = express.Router(); /*new router instance*/

router.post("/signup",signup) /*adding routes*/
router.post("/login",login) /*adding routes*/
router.post("/logout",logout) /*adding routes*/
router.get("/getCurrentUser",getCurrentUser)

export default router; /*exporting routes*/