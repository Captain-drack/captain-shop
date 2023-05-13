import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import ProductDetail from "./components/product-detail/ProductDetail";
import Home from "./pages/home";
import MainCart from "./pages/cart/MainCart";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/SignUp";
import "./app.css";
import Checkout from "./pages/checkout/checkoutLabel/CheckoutLabel";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<MainCart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
