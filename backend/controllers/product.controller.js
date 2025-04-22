import Product from "../models/products.model.js";

export const product = async (req, res) => {
    try {
        const product = [await Product.find()]
        res.status(201).json(product);

    } catch (error) {
        console.log("Error in adding product", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
