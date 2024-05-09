import { Router } from "express";
const router = Router();
import {
  createProduct,
  getAllProducts,
  uploadImage,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

router.route("/").post(createProduct).get(getAllProducts);

router.route("/uploadImage").post(uploadImage);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

router.route("/:id/reviews").get(getSingleProductReviews);

module.exports = router;
