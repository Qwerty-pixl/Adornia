import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <h3>Site Map</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/delivery">Delivery</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              <li>
                <Link to="/categories/piercing">Piercing</Link>
              </li>
              <li>
                <Link to="/categories/chains">Chains</Link>
              </li>
              <li>
                <Link to="/categories/ring">Ring</Link>
              </li>
              <li>
                <Link to="/categories/bracelets">Bracelets</Link>
              </li>
              <li>
                <Link to="/categories/pendants">Pendants</Link>
              </li>
              <li>
                <Link to="/categories/earrings">Earrings</Link>
              </li>
              <li>
                <Link to="/categories/keyrings">Keyrings</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>
              1 Esenina<br />
              Karakol, Kyrgyzstan
            </p>
            <p>
              <a className="contact-link" href="tel:+996704465375">
                +996 704 465 375
              </a><br />
              Email: <a className="contact-link" href="mailto:gulanda727@gmail.com">
                gulanda727@gmail.com
              </a>
            </p>
          </div>
          <div className="footer-col">
            <h3>Follow Us</h3>
            <ul className="social-media">
              <li>
                <a href="https://facebook.com">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
