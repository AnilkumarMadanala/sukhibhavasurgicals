import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import "../styles/floating.css";

export default function FloatingButtons() {
  return (
    <div className="floating-container">

      {/* Cart Button */}
      <Link to="/cart" className="float-btn cart-btn">
        <FaShoppingCart size={22} />
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
