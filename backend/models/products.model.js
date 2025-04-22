import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        p_image:{
            type:String,
            required:true,
        },
        p_name:{
            type:String,
            required:true,
        },
        p_price:{
            type:Number,
            required:true,
        },
        p_description:{
            type:String,
            required:true,
        }
    },
    {timestamps:true}
);

const Product = mongoose.model("Product",productSchema); 

export default Product;