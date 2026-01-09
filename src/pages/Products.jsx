import { useState, useContext, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/products.css";
import { CartContext } from "../context/CartContext";

import p1 from "../assets/products/p1.jpg";
import p2 from "../assets/products/p2.jpg";
import p3 from "../assets/products/p3.jpg";
import p4 from "../assets/products/p4.jpg";
import p5 from "../assets/products/p5.jpg";
import p6 from "../assets/products/p6.jpg";

export default function Products() {
  const { addToCart } = useContext(CartContext);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [selectedCat, setSelectedCat] = useState(null);

  const imageMap = { 1: p1, 2: p2, 3: p3, 4: p4, 5: p5, 6: p6 };

  const categories = [
    { id: 1, name: "Surgical Gloves", cat: "gloves" },
    { id: 2, name: "Face Masks", cat: "masks" },
    { id: 3, name: "Digital Thermometer", cat: "thermo" },
    { id: 4, name: "Surgical Scissors", cat: "scissors" },
    { id: 5, name: "Medical Tape", cat: "tape" },
    { id: 6, name: "Bandage Roll", cat: "bandage" },
  ];

  const allProducts = {
    gloves: [
      { id: 1, name: "Latex Gloves Small", price: 150, offer: 120, img: p1 },
      { id: 2, name: "Latex Gloves Medium", price: 160, offer: 130, img: p1 },
      { id: 3, name: "Surgical Nitrile Gloves", price: 200, offer: 170, img: p1 },
    ],
    masks: [
      { id: 4, name: "N95 Mask 5-Layer", price: 40, offer: 30, img: p2 },
      { id: 5, name: "3-Ply Mask (Blue)", price: 10, offer: 7, img: p2 },
      { id: 6, name: "Surgical Mask Premium", price: 15, offer: 10, img: p2 },
    ],
    thermo: [
      { id: 7, name: "Digital Thermometer PRO", price: 499, offer: 399, img: p3 },
      { id: 8, name: "Instant Thermometer", price: 699, offer: 550, img: p3 },
    ],
    scissors: [
      { id: 9, name: "Stainless Surgical Scissors", price: 299, offer: 240, img: p4 },
      { id: 10, name: "Micro Surgical Scissor", price: 399, offer: 340, img: p4 },
    ],
    tape: [
      { id: 11, name: "Medical Adhesive Tape", price: 99, offer: 70, img: p5 },
      { id: 12, name: "Paper Tape (Sensitive Skin)", price: 150, offer: 110, img: p5 },
    ],
    bandage: [
      { id: 13, name: "Bandage Roll Small", price: 50, offer: 40, img: p6 },
      { id: 14, name: "Bandage Roll Large", price: 80, offer: 65, img: p6 },
    ],
  };

  /* 🔹 FLATTEN ALL PRODUCTS */
  const flatProducts = useMemo(() => {
    return Object.values(allProducts).flat();
  }, []);

  /* 🔹 SORT SEARCHED PRODUCTS TO TOP */
  const sortedProducts = useMemo(() => {
    if (!searchQuery) return flatProducts;

    return [...flatProducts].sort((a, b) => {
      const aMatch = a.name.toLowerCase().includes(searchQuery.toLowerCase());
      const bMatch = b.name.toLowerCase().includes(searchQuery.toLowerCase());

      if (aMatch && !bMatch) return -1;
      if (!aMatch && bMatch) return 1;
      return 0;
    });
  }, [searchQuery, flatProducts]);

  /* 🔹 AUTO SHOW SEARCH RESULTS */
  useEffect(() => {
    if (searchQuery) {
      setSelectedCat("search");
    }
  }, [searchQuery]);

  return (
    <div className="products-container">

      {/* 🔹 CATEGORY VIEW */}
      {!selectedCat && (
        <>
          <h1 className="products-title">Our Medical Products</h1>

          <div className="products-grid">
            {categories.map((cat) => (
              <div key={cat.id} className="product-card">
                <img src={imageMap[cat.id]} className="product-img" />

                <h3>{cat.name}</h3>

                <button
                  className="enquiry-btn"
                  onClick={() => setSelectedCat(cat.cat)}
                >
                  Buy This Category
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 🔹 SEARCH RESULTS */}
      {selectedCat === "search" && (
        <>
          <h1 className="products-title">
            Search Results for "{searchQuery}"
          </h1>

          <button className="back-btn" onClick={() => setSelectedCat(null)}>
            ← Back
          </button>

          <div className="product-list-grid">
            {sortedProducts.map((prod) => (
              <div key={prod.id} className="product-full-card">
                <img src={prod.img} className="full-img" />

                <h3>{prod.name}</h3>

                <p className="price-row">
                  ₹{prod.offer}{" "}
                  <span className="old-price">₹{prod.price}</span>
                </p>

                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(prod)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 🔹 CATEGORY PRODUCTS */}
      {selectedCat && selectedCat !== "search" && (
        <>
          <h1 className="products-title">Available Products</h1>

          <button className="back-btn" onClick={() => setSelectedCat(null)}>
            ← Back
          </button>

          <div className="product-list-grid">
            {allProducts[selectedCat].map((prod) => (
              <div key={prod.id} className="product-full-card">
                <img src={prod.img} className="full-img" />

                <h3>{prod.name}</h3>

                <p className="price-row">
                  ₹{prod.offer}{" "}
                  <span className="old-price">₹{prod.price}</span>
                </p>

                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(prod)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}
