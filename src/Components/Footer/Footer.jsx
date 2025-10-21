import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.webp';
import instagram_icon from '../../assets/instagram.png';
import facebook_icon from '../../assets/facebook.png';
import whatsapp_icon from '../../assets/whatsapp.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Shopify logo" height="45px" />
          <p>Shopify</p>
        </div>

        <ul className="footer-links">
          <li>About</li>
          <li>Products</li>
          <li>Offices</li>
          <li>Company</li>
          <li>Contact</li>
        </ul>

        <div className="footer-social-icons">
          <div className="footer-icon">
            <img src={instagram_icon} alt="Instagram" />
          </div>
          <div className="footer-icon">
            <img src={facebook_icon} alt="Facebook" />
          </div>
          <div className="footer-icon">
            <img src={whatsapp_icon} alt="WhatsApp" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2025 Shopify — All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
