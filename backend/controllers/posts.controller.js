import Post from '../models/posts.model.js';

export const addPost = async (req, res) => {
	try {
        const { name, thoughts, image } = req.body;

        const post = new Post({
            image,
            name,
            thoughts
        });

        await post.save();

        res.status(201).json({ message: "Post added successfully" });

    } catch (error) {
        console.log("Error in adding product", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getPost = async (req, res) => {
	try {
        const post = [await Post.find()]
        res.status(201).json(post);

    } catch (error) {
        console.log("Error in adding post", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
