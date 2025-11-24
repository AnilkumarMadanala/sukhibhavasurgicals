import { Link } from "react-router-dom";

import "../styles/navbar.css";
import {
  FaPhoneAlt,
  FaThLarge,
  FaBoxOpen,
  FaShoppingCart,
  FaSearch,
  FaHome
} from "react-icons/fa";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";  // ✅

export default function Navbar() {
  const { cart } = useContext(CartContext);    // get cart items
  const cartCount = cart.length;

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* ROW 1 — TITLE + CALL NOW */}
        <div className="nav-top-row">
          <div className="nav-logo">
            <Link to="/">Sukhibhava Surgicals</Link>
          </div>

          <a href="tel:9676760263" className="callnow-btn">
            <FaPhoneAlt className="call-icon" /> Call Now
          </a>
        </div>

        {/* ROW 2 — SHOP BY */}
        <div className="shop-by">Shop By</div>

        {/* MOBILE ICONS */}
        <div className="nav-mobile-icons">

          <Link to="/" className="icon-btn">
            <FaHome />
            <span>Home</span>
          </Link>

          <Link to="/categories" className="icon-btn">
            <FaThLarge />
            <span>Categories</span>
          </Link>

          <Link to="/products" className="icon-btn">
            <FaBoxOpen />
            <span>All Products</span>
          </Link>

          {/* CART WITH COUNT */}
          <Link to="/cart" className="icon-btn cart-icon-btn">
            <FaShoppingCart />
            <span>Cart</span>

            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>

        </div>

        {/* SEARCH */}
        <div className="nav-search">
          <input type="text" placeholder="Search products..." />
          <button><FaSearch /></button>
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-desktop-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">All Products</Link></li>
          <li><Link to="/categories">Categories</Link></li>

          {/* DESKTOP CART */}
          <li className="desktop-cart">
            <Link to="/cart">
              <FaShoppingCart />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Link>
          </li>

          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </div>
    </nav>
  );
}
