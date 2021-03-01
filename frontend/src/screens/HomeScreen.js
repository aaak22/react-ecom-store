// import axios from 'axios';
// import products from "../products";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { Col, Row } from "react-bootstrap";
import Product from "../components/product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  // const [products,setProducts] = useState([]);
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1
  
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  // axios.get('/api/products');
  // const fetchProducts = async() =>{
  //   const { data } = await axios.get('/api/products');
  //   setProducts(data);
  // }
  // fetchProducts();

  useEffect(() => {
    dispatch(listProducts(keyword,pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>Go Back</Link> }
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>
          {" "}
          <Message variant="danger"> {error}</Message>
        </h3>
      ) : (
        <>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <div className="sinProduct">
                <Product product={product} />
              </div>
            </Col>
          ))}
        </Row>
        <Paginate pages={pages} page={page} isAdmin={false} keyword={keyword ? keyword : '' }/>
        </>
      )}
    </>
  );
};

export default HomeScreen;
