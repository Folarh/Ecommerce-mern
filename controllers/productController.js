import "express-async-errors";
import Product from "../models/productModel.js";
import { StatusCodes } from "http-status-codes";

export const createProduct = async (req, res) => {
  const productData = req.body;
  const product = await Product.create(productData);
  res.status(StatusCodes.CREATED).json({ msg: "Success", product });
};

export const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};
export const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return res.status(StatusCodes.OK).json({ msg: `no product with id ${id}` });
  }
  res.status(201).json({ product });
};

export const updateProduct = async (req, res) => {
  const { id: productId } = req.params;

  const updateProduct = await Product.findOneAndUpdate(
    { _id: productId },
    req.body,
    {
      new: true,
    }
  );

  if (!updateProduct) {
    return res.status(400).json({ msg: `no product with id ${productId}` });
  }

  res.status(StatusCodes.OK).json({ updateProduct });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const removeProduct = await Product.findByIdAndDelete(id);
  if (!removeProduct) {
    return res.status(400).json({ msg: `no product with id ${id}` });
  }

  res
    .status(201)
    .json({ msg: "Product was deleted succesfully", product: removeProduct });
};
export const uploadImage = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "welcome" });
};
