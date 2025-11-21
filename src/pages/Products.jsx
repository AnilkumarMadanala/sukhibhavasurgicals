import "../styles/products.css";
import p1 from "../assets/products/p1.jpg";
import p2 from "../assets/products/p2.jpg";
import p3 from "../assets/products/p3.jpg";
import p4 from "../assets/products/p4.jpg";
import p5 from "../assets/products/p5.jpg";
import p6 from "../assets/products/p6.jpg";

export default function Products() {
  const productList = [
    { id: 1, img: p1, name: "Surgical Gloves", desc: "High-quality latex gloves." },
    { id: 2, img: p2, name: "Face Masks", desc: "3-ply and N95 protective masks." },
    { id: 3, img: p3, name: "Digital Thermometer", desc: "Fast & accurate readings." },
    { id: 4, img: p4, name: "Surgical Scissors", desc: "Durable stainless steel." },
    { id: 5, img: p5, name: "Medical Tape", desc: "Skin-friendly adhesive tape." },
    { id: 6, img: p6, name: "Bandage Roll", desc: "Soft & high-absorption material." },
  ];

  return (
    <div className="products-container">
      <h1 className="products-title">Our Medical Products</h1>
      <p className="products-subtitle">
        High-quality and affordable surgical & medical supplies.
      </p>

      <div className="products-grid">
        {productList.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} className="product-img" />

            <h3 className="product-name">{item.name}</h3>
            <p className="product-desc">{item.desc}</p>

            <button className="enquiry-btn">Add to Enquiry</button>
          </div>
        ))}
      </div>
    </div>
  );
}
