import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";
import { FaPlus, FaMinus, FaTrash, FaWhatsapp } from "react-icons/fa";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem, getTotal } = useCart();

  // 👉 WhatsApp Order
  const sendToWhatsApp = () => {
    if (cart.length === 0) return;

    let message = "🛒 *New Medical Order*%0A%0A";

    cart.forEach((item) => {
      message += `• ${item.name}%0A   Qty: ${item.qty}%0A   Price: ₹${item.offer}%0A%0A`;
    });

    message += `------------------------%0A`;
    message += `*TOTAL: ₹${getTotal()}*%0A%0A`;
    message += "Please confirm my order. 🙏";

    const phone = "9676760263";
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty 🛒</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} className="cart-img" />

                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p className="price">₹ {item.offer}</p>

                  <div className="qty-box">
                    <button onClick={() => decreaseQty(item.id)}>
                      <FaMinus />
                    </button>

                    <span>{item.qty}</span>

                    <button onClick={() => increaseQty(item.id)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <div className="cart-actions">
                  <p className="item-total">
                    ₹ {item.offer * item.qty}
                  </p>

                  <button
                    className="delete-btn"
                    onClick={() => removeItem(item.id)}
                    title="Remove item"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="summary-row total">
              <span>Total Amount</span>
              <span>₹ {getTotal()}</span>
            </div>

            <button className="whatsapp-btn" onClick={sendToWhatsApp}>
              <FaWhatsapp /> Proceed to WhatsApp Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
