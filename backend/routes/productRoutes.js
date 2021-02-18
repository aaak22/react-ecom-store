// import asyncHandler from 'express-async-handler';
// import Product from '../models/productModel.js';
import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

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

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
