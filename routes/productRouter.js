import { Router } from "express";
const router = Router();
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { validateProductInput } from "../middleware/validationMiddleware.js";

import {
  authorizePermissions,
  authenticateUser,
} from "../middleware/authMiddleware.js";

// ALTERNATE METHOD
router
  .route("/")
  .get(getAllProducts)

  .post(validateProductInput, authenticateUser, createProduct, [
    authorizePermissions("admin"),
  ]);
router
  .route("/:id")
  .get(getSingleProduct)

  .patch(
    validateProductInput,

    authenticateUser,
    updateProduct,
    [authorizePermissions("admin")]
  )

  .delete(authenticateUser, deleteProduct, [authorizePermissions("admin")]);

export default router;
