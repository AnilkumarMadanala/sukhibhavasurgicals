import { useState, useEffect } from "react";
import "../styles/home.css";
import FloatingButtons from "../components/FloatingButtons";

import hero1 from "../assets/hero6.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

// IMPORT ALL PAGES TO SHOW THEM INSIDE HOME
import About from "./About";
import Products from "./Products";
import Categories from "./Categories";
import Contact from "./Contact";

export default function Home() {
  const images = [hero1, hero2, hero3];

  const slideText = [
    {
      title: "Quality Medical Equipment",
      desc: "Your trusted partner for medical supplies.",
      btn: "Shop Now",
      link: "/products",
    },
    {
      title: "Trusted By Hospitals & Clinics",
      desc: "Supplying reliable products for years.",
      btn: "Explore Categories",
      link: "/categories",
    },
    {
      title: "Surgical Products You Can Rely On",
      desc: "High-quality and affordable instruments.",
      btn: "Send Enquiry",
      link: "/contact",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide effect
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

                <a href={slideText[index].link} className="hero-btn">
                  {slideText[index].btn}
                </a>
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

      {/* ----------------------- ABOUT SECTION ----------------------- */}
      <section id="about-section">
        <About />
      </section>

      {/* ----------------------- CATEGORIES SECTION ----------------------- */}
      <section id="categories-section">
        <Categories />
      </section>

      {/* ----------------------- PRODUCTS SECTION ----------------------- */}
      <section id="products-section">
        <Products />
      </section>

      {/* ----------------------- CONTACT SECTION ----------------------- */}
      <section id="contact-section">
        <Contact />
      </section>
   <FloatingButtons />

    </div>
  );
}
