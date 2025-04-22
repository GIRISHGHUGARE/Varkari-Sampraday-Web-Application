import { sendWelcomeEmail } from "../emails/emailHandler.js";
import User from "../models/users.model.js";
import bcrypt from "bcryptjs"; /* Library used for hashing the password */

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashPassword,
        });

        await user.save();

        res.status(201).json({ name:user.name, message: "User registered successfully" });

        const profileUrl = process.env.CLIENT_URL + "/profile/" + user.username;
        // SEND WELCOME EMAIL
        try{
            await sendWelcomeEmail("girishghugare19@gmail.com", user.name, profileUrl)
        }catch(emailError){
            console.error("Error sending welcome Email",emailError)
        }

    } catch (error) {
        console.log("Error in SigningUp", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const login = async (req, res) => {
    try {
		const { name, email, password } = req.body;

		// Check if user exists
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		// Check password
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: "Invalid credentials" });
		}
		res.json({ name:user.name, message: "Logged in successfully" });
	} catch (error) {
		console.error("Error in login controller:", error);
		res.status(500).json({ message: "Server error" });
	}
	
};
export const logout = (req, res) => {
	res.send({ message: "Logged out successfully" });
};

export const getCurrentUser = async (req, res) => {
	try {
		res.json(req.user);
	} catch (error) {
		console.error("Error in getCurrentUser controller:", error);
		res.status(500).json({ message: "Server error" });
	}
};