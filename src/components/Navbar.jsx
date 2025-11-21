import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FaPhoneAlt, FaThLarge, FaBoxOpen, FaInfoCircle, FaShoppingCart, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* ROW 1 — TITLE + CALL NOW (MOBILE + DESKTOP) */}
        <div className="nav-top-row">
          <div className="nav-logo">
            <Link to="/">Sukhibhava Surgicals</Link>
          </div>

          <a href="tel:9676760263" className="callnow-btn">
            <FaPhoneAlt className="call-icon" /> Call Now
          </a>
        </div>

        {/* ROW 2 — SHOP BY LABEL (MOBILE ONLY) */}
        <div className="shop-by">Shop By</div>

        {/* ROW 3 — ICON MENU FOR MOBILE */}
        <div className="nav-mobile-icons">
          <Link to="/categories" className="icon-btn">
            <FaThLarge /> <span>Categories</span>
          </Link>

          <Link to="/products" className="icon-btn">
            <FaBoxOpen /> <span>All Products</span>
          </Link>

          <Link to="/about" className="icon-btn">
            <FaInfoCircle /> <span>About</span>
          </Link>

          <Link to="/cart" className="icon-btn">
            <FaShoppingCart /> <span>Cart</span>
          </Link>
        </div>

        {/* ROW 4 — SEARCH BAR */}
        <div className="nav-search">
          <input type="text" placeholder="Search products..." />
          <button><FaSearch /></button>
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-desktop-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">All Products</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </div>
    </nav>
  );
}
