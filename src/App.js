import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import ProductDetail from "./components/product-detail/ProductDetail";
import Home from "./components/home";
import MainCart from "./components/cart/MainCart";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import "./app.css";

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
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
