import React, { useState, useEffect } from "react";
import axios from 'axios';
// import products from "../products";
import Product from "../components/product.js";
import { Col, Row } from "react-bootstrap";

const HomeScreen = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    // axios.get('/api/products');
    const fetchProducts = async() =>{
      const { data } = await axios.get('/api/products');
      setProducts(data);
    }
    fetchProducts();
  },[]);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <div className="sinProduct">
              <Product product={product} />
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
