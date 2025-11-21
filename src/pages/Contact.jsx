import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-container">

      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Reach us anytime for enquiries about our medical & surgical products.
      </p>

      <div className="contact-box">

        {/* LEFT – CONTACT DETAILS */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <p>
            <strong>Address:</strong><br />
            SUKHIBHAVA SURGICAL, Aditya Complex, 18-1, KGH Down Rd, Opposite KGH OP Gate, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002
          </p>
             <strong>MobileNo:</strong><br />
          <p className="phone">9676760263</p>


          <p>
            <strong>Email:</strong><br />
            <a href="mailto:sukhibhavasurgicals@gmail.com">
              sukhibhavasurgicals@gmail.com
            </a>
          </p>
        </div>

        {/* RIGHT – MAP */}
        <div className="map-container">
          <iframe
            title="google-map"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d121623.47505579307!2d83.2220956452678!3d17.710040729056868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d17.7662849!2d83.2907602!4m5!1s0x3a3943ff431b6635%3A0xa9b3184a7534248f!2sAditya%20Complex%2C%2018-1%2C%20KGH%20Down%20Rd%2C%20Opposite%20KGH%20OP%20Gate%2C%20Maharani%20Peta%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530002!3m2!1d17.7100579!2d83.3044974!5e0!3m2!1sen!2sin!4v1763669470068!5m2!1sen!2sin"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
