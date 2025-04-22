import express from "express"; /*nodejs framework*/
import { product } from "../controllers/product.controller.js"; /*getting controllers*/

const router = express.Router(); /*new router instance*/

router.get("/getProducts",product) /*adding routes*/

export default router; /*exporting routes*/