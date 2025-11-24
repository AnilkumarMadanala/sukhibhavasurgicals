import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem, getTotal } = useCart();

  // 👉 Create WhatsApp order message
  const sendToWhatsApp = () => {
    if (cart.length === 0) return;

    let message = "🛒 *New Medicine Order*%0A%0A";

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
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-msg">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt="" className="cart-img" />

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

              <button
                className="delete-btn"
                onClick={() => removeItem(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          ))}

          <h3 className="total">Total: ₹ {getTotal()}</h3>

          {/* 👉 WhatsApp Button */}
          <button className="whatsapp-btn" onClick={sendToWhatsApp}>
            Proceed to WhatsApp Order
          </button>
        </>
      )}
    </div>
  );
}
