import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import ProductDetail from "./components/product-detail/ProductDetail";
import Home from "./components/home";
import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
