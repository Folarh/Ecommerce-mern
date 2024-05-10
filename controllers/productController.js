import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
  // const {name,price, description}= req.body
  const productData = req.body;
  const product = await Product.create(productData);
  res.status(201).json({ msg: "Product created", product });
};
export const getAllProducts = async (req, res) => {
  // const products = await Product.find({});

  res.status(201).json({ msg: "welcome" });
};
export const getSingleProduct = async (req, res) => {
  res.status(201).json({ msg: "welcome" });
};
export const updateProduct = async (req, res) => {
  res.status(201).json({ msg: "welcome" });
};
export const deleteProduct = async (req, res) => {
  res.status(201).json({ msg: "welcome" });
};
export const uploadImage = async (req, res) => {
  res.status(201).json({ msg: "welcome" });
};
