import React from 'react';
import '../styles/Footer.scss';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h4>Get in touch</h4>
          <p>support@amrutam.global</p>
          <p>
            Amrutam Pharmaceuticals Pvt Ltd.,<br />
            chittraqut ganj, Nai Sadak, Lashkar,<br />
            Gwalior -474001
          </p>
          <p>+91 9731719199</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterestP /></a>
          </div>
        </div>


        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/terms">Terms and Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/mobile-app-policy">Privacy Policy for Mobile Apps</a></li>
            <li><a href="/shipping">Shipping, return and cancellation Policy</a></li>
            <li><a href="/international-delivery">International Delivery</a></li>
            <li><a href="/businesses-hotels-resorts">For Businesses, Hotels, and Resorts</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Subscribe to our Newsletter and join Amrutam Family today!</h4>
          <form onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


