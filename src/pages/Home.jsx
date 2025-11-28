import { useState, useEffect } from "react";
import "../styles/home.css";
import FloatingButtons from "../components/FloatingButtons";
import { useNavigate } from "react-router-dom";

import hero1 from "../assets/hero6.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

// IMPORT PAGES
import About from "./About";
import Products from "./Products";
import Categories from "./Categories";
import Contact from "./Contact";

export default function Home() {
  const navigate = useNavigate();

  const images = [hero1, hero2, hero3];

  const slideText = [
    {
      title: "Quality Medical Equipment",
      desc: "Your trusted partner for medical supplies.",
      btn: "Shop Now",
      action: () => navigate("/products"), // ⭐ Go to Products
    },
    {
      title: "Trusted By Hospitals & Clinics",
      desc: "Supplying reliable products for years.",
      btn: "Explore Categories",
      action: () => navigate("/categories"), // ⭐ Go to Categories
    },
    {
      title: "Surgical Products You Can Rely On",
      desc: "High-quality and affordable instruments.",
      btn: "Send Enquiry",
      action: () =>
        window.open("https://wa.me/919676760263", "_blank"), // ⭐ WhatsApp
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="home-container">

      {/* ----------------------- SLIDER ----------------------- */}
      <div className="carousel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === current ? "active" : ""}`}
          >
            <img src={img} alt={`Slide ${index}`} />

            {index === current && (
              <div className="carousel-text">
                <h1>{slideText[index].title}</h1>
                <p>{slideText[index].desc}</p>

                {/* ⭐ Fixed Button Here */}
                <button
                  className="hero-btn"
                  onClick={slideText[index].action}   // ⭐ CALL ACTION DIRECTLY
                >
                  {slideText[index].btn}
                </button>
              </div>
            )}
          </div>
        ))}

        <div className="arrow-left" onClick={prevSlide}>❮</div>
        <div className="arrow-right" onClick={nextSlide}>❯</div>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === current ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* ----------------------- SECTIONS ----------------------- */}
      <section id="about-section">
        <About />
      </section>

      <section id="categories-section">
        <Categories />
      </section>

      <section id="products-section">
        <Products />
      </section>

      <section id="contact-section">
        <Contact />
      </section>

      {/* Floating WhatsApp + Cart */}
      <FloatingButtons />
    </div>
  );
}
