import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
    {
        image:{
            type:String,
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        }
    },
    {timestamps:true}
);

const Stories = mongoose.model("Stories",storySchema); 

export default Stories;