import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import "../styles/floating.css";
import { CartContext } from "../context/CartContext";   // ✅ import context

export default function FloatingButtons() {

  const { cart } = useContext(CartContext);  // ✅ get cart data
  const cartCount = cart.length;             // number of products in cart

  return (
    <div className="floating-container">

      {/* Cart Floating Button */}
      <Link to="/cart" className="float-btn cart-btn">
        <FaShoppingCart size={22} />

        {/* 🔴 Red Notification Badge */}
        {cartCount > 0 && (
          <span className="float-cart-badge">{cartCount}</span>
        )}
      </Link>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919676760263"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn whatsapp-btn"
      >
        <FaWhatsapp size={24} />
      </a>

    </div>
  );
}
