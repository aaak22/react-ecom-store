import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrdersScreen";
import UsersListScreen from "./screens/UsersListScreen";
import ProductListScreen from "./screens/ProductListScreen";
import UsersEditScreen from "./screens/UserEditScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrdersListScreen from "./screens/OrdersListScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/register" component={RegisterScreen} />
          <Route path="/admin/usersList" component={UsersListScreen} />
          <Route path="/admin/productList" component={ProductListScreen} exact/>
          <Route path="/admin/productList/:pageNumber" component={ProductListScreen} exact/>
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/user/:id/edit" component={UsersEditScreen} />
          <Route path="/admin/orderList" component={OrdersListScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/orders/:id" component={OrderScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/search/:keyword" component={HomeScreen}  exact/>
          <Route path="/page/:pageNumber" component={HomeScreen}/>
          <Route path="/search/:keyword/page/:pageNumber" component={HomeScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
