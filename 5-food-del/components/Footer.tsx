import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <section className="footer-section">
          <h3>FoodieExpress</h3>
          <p>Order food from your favorite restaurants with fast delivery.</p>
        </section>

        <section className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Partner With Us</li>
          </ul>
        </section>

        <section className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </section>

        <section className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </section>
      </div>
      <div className="footer-bottom">
        <p>© 2025 FoodieExpress. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
