import Admin from "../models/admin.model.js";
import Product from "../models/products.model.js";
import Stories from "../models/stories.model.js";
import User from "../models/users.model.js";
import bcrypt from "bcryptjs"; /* Library used for hashing the password */

export const adminSignup = async (req, res) => {
    try {
        const { name, password } = req.body;

        if (!name || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const admin = new Admin({
            name,
            password: hashPassword,
        });

        await admin.save();

        res.status(201).json({ message: "Admin registered successfully" });

    } catch (error) {
        console.log("Error in SigningUp", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const adminLogin = async (req, res) => {
    try {
		const { name, password } = req.body;

		// Check if user exists
		const admin = await Admin.findOne({ name });
		if (!admin) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		// Check password
		const isMatch = await bcrypt.compare(password, admin.password);
		if (!isMatch) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		res.json({ message: "Logged in successfully" });
	} catch (error) {
		console.error("Error in login controller:", error);
		res.status(500).json({ message: "Server error" });
	}
	
};

export const adminLogout = (req, res) => {
	res.send({ message: "Logged out successfully" });
};

export const addProduct = async (req, res) => {
	try {
        const { p_image, p_name, p_price, p_description } = req.body;

        const product = new Product({
            p_image,
            p_name,
            p_price,
            p_description,
        });

        await product.save();

        res.status(201).json({ message: "Product added successfully" });

    } catch (error) {
        console.log("Error in adding product", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Add Story
export const addStory = async (req, res) => {
	try {
        const { image, title, description } = req.body;

        const story = new Stories({
            image,
            title,
            description,
        });

        await story.save();

        res.status(201).json({ message: "Story added successfully" });

    } catch (error) {
        console.log("Error in adding story", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getUsers = async (req, res) => {
    try {
		// Check if user exists
		const usersData = await User.find();
		if (!usersData) {
			return res.status(400).json({ message: "Data not loaded" });
		}
		res.json({ usersData });
	} catch (error) {
		console.error("Error in loading data", error);
		res.status(500).json({ message: "Server error" });
	}
};
