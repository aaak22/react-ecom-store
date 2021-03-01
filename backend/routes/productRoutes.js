// import asyncHandler from 'express-async-handler';
// import Product from '../models/productModel.js';
import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// router.get('/',
//     asyncHandler(async (req,res) => {
//         // const products = await Product.find({});
//         // res.status(401)
//         // throw new Error('Not Authorized');
//         // res.json(products);
// }));

// router.get('/:id', asyncHandler(async (req,res) => {
//     const product = await  Product.findById(req.params.id);
//     if(product){
//         res.json(product);
//     }else{
//         // res.status(404).json({ message : 'Product not found'})
//         res.status(404)
//         throw new Error('Product not Found');
//     }
// }));

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top',getTopProducts)
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
