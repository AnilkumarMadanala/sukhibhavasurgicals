import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import "../styles/navbar.css";
import {
  FaPhoneAlt,
  FaThLarge,
  FaBoxOpen,
  FaShoppingCart,
  FaSearch,
  FaHome
} from "react-icons/fa";
import { CartContext } from "../context/CartContext";

// 🔹 ALL PRODUCTS DATA (used for search)
const searchProducts = [
  { id: 1, name: "Latex Gloves Small", cat: "gloves" },
  { id: 2, name: "Latex Gloves Medium", cat: "gloves" },
  { id: 3, name: "Surgical Nitrile Gloves", cat: "gloves" },
  { id: 4, name: "N95 Mask 5-Layer", cat: "masks" },
  { id: 5, name: "3-Ply Mask Blue", cat: "masks" },
  { id: 6, name: "Surgical Mask Premium", cat: "masks" },
  { id: 7, name: "Digital Thermometer PRO", cat: "thermo" },
  { id: 8, name: "Instant Thermometer", cat: "thermo" },
  { id: 9, name: "Stainless Surgical Scissors", cat: "scissors" },
  { id: 10, name: "Micro Surgical Scissor", cat: "scissors" },
  { id: 11, name: "Medical Adhesive Tape", cat: "tape" },
  { id: 12, name: "Paper Tape Sensitive Skin", cat: "tape" },
  { id: 13, name: "Bandage Roll Small", cat: "bandage" },
  { id: 14, name: "Bandage Roll Large", cat: "bandage" },
];

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.length;

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // 🔍 Live Search
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = searchProducts.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleEnter = (e) => {
  if (e.key === "Enter" && query.trim()) {
    navigate(`/products?search=${encodeURIComponent(query)}`);
    setResults([]);
    setQuery("");
  }
};

// 👉 Click suggestion
const handleClick = (name) => {
  navigate(`/products?search=${encodeURIComponent(name)}`);
  setResults([]);
  setQuery("");
};

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* TOP ROW */}
        <div className="nav-top-row">
          <div className="nav-logo">
            <Link to="/">Sukhibhava Surgicals</Link>
          </div>

          <a href="tel:9676760263" className="callnow-btn">
            <FaPhoneAlt /> Call Now
          </a>
        </div>

        <div className="shopby-wrapper">
  <span className="shop-by">Shop By</span>

  <span className="free-delivery">
    🚚 FREE Delivery <small>within 5 KM</small>
  </span>
</div>


        {/* MOBILE ICONS */}
        <div className="nav-mobile-icons">
          <Link to="/" className="icon-btn"><FaHome /><span>Home</span></Link>
          <Link to="/categories" className="icon-btn"><FaThLarge /><span>Categories</span></Link>
          <Link to="/products" className="icon-btn"><FaBoxOpen /><span>Products</span></Link>

          <Link to="/cart" className="icon-btn cart-icon-btn">
            <FaShoppingCart />
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>

        {/* 🔍 SEARCH */}
        <div className="nav-search-wrapper">
          <div className="nav-search">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={handleSearch}
              onKeyDown={handleEnter}
            />
            <button><FaSearch /></button>
          </div>

          {results.length > 0 && (
            <ul className="search-suggestions">
              {results.map((item) => (
                <li key={item.id} onClick={() => handleClick(item.name)}>
  {item.name}
</li>
              ))}
            </ul>
          )}
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-desktop-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">All Products</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li className="desktop-cart">
            <Link to="/cart">
              <FaShoppingCart />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </div>
    </nav>
  );
}
