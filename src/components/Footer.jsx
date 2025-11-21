import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* ABOUT SECTION */}
        <div className="footer-col">
          <h3>MedSupply</h3>
          <p>
            Your trusted partner for quality medical equipment, surgical items,
            and healthcare supplies across India.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 SUKHIBHAVA SURGICALS, Aditya Complex, 18-1, KGH Down Rd, Opposite KGH OP Gate, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ support@medsupply.in</p>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MedSupply. All Rights Reserved.</p>
      </div>

    </footer>
  );
}
