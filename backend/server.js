import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import adminRoutes from "./routes/admin.route.js";
import storiesRoutes from "./routes/stories.route.js"
import postRoutes from "./routes/posts.route.js"
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' })); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/product",productRoutes);
app.use("/api/v1/admin",adminRoutes);
app.use("/api/v1/stories",storiesRoutes);
app.use("/api/v1/post",postRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    connectDB();
});