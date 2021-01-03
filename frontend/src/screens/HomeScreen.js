import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
// import axios from 'axios';
// import products from "../products";
import Product from "../components/product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Col, Row } from "react-bootstrap";
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  // const [products,setProducts] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector( state => state.productList);
  const { loading, error, products } = productList;
  // axios.get('/api/products');
    // const fetchProducts = async() =>{
    //   const { data } = await axios.get('/api/products');
    //   setProducts(data);
    // }
    // fetchProducts();

    useEffect(()=>{
       dispatch(listProducts())
    },[dispatch]);
    
  return (
    <>
      <h1>Latest Products</h1>
      { loading ? <Loader /> : error ? <h3> <Message variant="danger"> {error}</Message></h3> :
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <div className="sinProduct">
                <Product product={product} />
              </div>
            </Col>
          ))}
        </Row>
      }
      
    </>
  );
};

export default HomeScreen;
