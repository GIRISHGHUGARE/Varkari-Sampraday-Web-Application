import Stories from "../models/stories.model.js";

export const story = async (req, res) => {
    try {
        const story = [await Stories.find()]
        res.status(201).json(story);

    } catch (error) {
        console.log("Error in adding story", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
