// const express = require('express');
// const dotenv = require('dotenv');
// const products = require('./data/products.js');

import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors'
import connectDb from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
// import products from './data/products.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

connectDb();

const app = express();

app.use(express.json());



// app.use((req,res,next)=>{
//     console.log(req.originalUrl );
//     next();
// });


app.get('/',(req,res) => {
    res.send(`API is running on ${PORT}......`);
});

// app.get('/api/products',(req,res) => {
//     res.json(products);
// });

// app.get('/api/products/:id',(req,res) => {
//     const product = products.find((p) => p._id === req.params.id);
//     // console.log(product);
//     res.json(product);
// });

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);

// app.use((req, res, next) =>{
//     const error = new Error(`Not Found - ${req.originalUrl}`);
//     res.status(404);
//     next(error);
// });

// app.use((err,req,res,next) => {
//     console.log(res);
//     const statusCode = res.statusCode === 200 ? 500 : res.statusCode
//     res.status(statusCode);
//     res.json({
//         message: err.message,
//         stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//     });
// });

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));