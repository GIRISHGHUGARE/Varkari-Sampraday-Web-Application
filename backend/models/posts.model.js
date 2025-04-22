import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        image:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true,
            unique:true
        },
        thoughts:{
            type:String,
            required:true,
        }
    },{timestamps:true}
);

const Post = mongoose.model("Post",postSchema);

export default Post;