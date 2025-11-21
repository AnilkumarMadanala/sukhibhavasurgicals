import "../styles/categories.css";

export default function Categories() {
  const categories = [
  {
    name: "Surgical Instruments",
    image: "https://cdn-icons-png.flaticon.com/512/4320/4320986.png",
  },
  {
    name: "Medical Equipment",
    image: "https://cdn-icons-png.flaticon.com/512/2965/2965874.png",
  },
  {
    name: "Hospital Furniture",
    image: "https://cdn-icons-png.flaticon.com/512/2965/2965876.png",
  },
  {
    name: "Diagnostic Products",
    image: "https://cdn-icons-png.flaticon.com/512/4320/4320971.png",
  },
  {
    name: "Disposables",
    image: "https://cdn-icons-png.flaticon.com/512/4320/4320991.png",
  },
  {
    name: "Laboratory Items",
    image: "https://cdn-icons-png.flaticon.com/512/4320/4320996.png",
  },

{
  name: "Orthopaedic Supports",
  image: "https://cdn-icons-png.flaticon.com/512/4320/4320998.png",
}
,
  {
    name: "Respiratory Care",
    image: "https://cdn-icons-png.flaticon.com/512/2965/2965870.png",
  },
  {
    name: "Wound Care & Bandages",
    image: "https://cdn-icons-png.flaticon.com/512/2965/2965858.png",
  },
  {
    name: "Pharmacy Supplies",
    image: "https://cdn-icons-png.flaticon.com/512/2965/2965843.png",
  },
];


  return (
    <div className="categories-container">
      <h1 className="cat-title">Our Product Categories</h1>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.image} alt={cat.name} className="category-img" />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
