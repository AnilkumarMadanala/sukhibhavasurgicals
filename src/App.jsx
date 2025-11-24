import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/products";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Cart from "./pages/cart"; 
import { Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";  // ✅

function App() {
  return (
    <>
      <CartProvider>      {/* ✅ Wrap entire app */}

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />

      </CartProvider>
    </>
  );
}

export default App;
