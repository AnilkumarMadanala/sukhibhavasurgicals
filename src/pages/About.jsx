import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Sukhibhava Surgicals</h1>
        <p>Your trusted partner in surgical & medical equipment.</p>
      </div>

      <div className="about-content">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img
  src="https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg"
  alt="Medical Equipment"
/>

        </div>

        {/* RIGHT TEXT */}
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Sukhibhava Surgicals is a leading supplier of high-quality medical,
            surgical, and healthcare products. We provide reliable solutions to
            hospitals, clinics, pharmacies, and individual customers across
            Vizag & surrounding regions.
          </p>

          <h2>Our Mission</h2>
          <p>
            To deliver safe, affordable, and reliable surgical equipment that
            improves patient care and supports healthcare professionals.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ Wide range of certified medical products</li>
            <li>✔ Affordable pricing and bulk supply</li>
            <li>✔ Fast delivery across Vizag region</li>
            <li>✔ Trusted by hospitals & clinics for 10+ years</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
