import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQY9TJRm1ViLT1CE-a56eKcehKKOCEutgVcw&s" alt="Work4u Logo" className="footer-logo" />
          <p>Your Work, Our Help</p>
          <button className="tasker-button"><a href='register'>Register </a></button>
          
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/post-work">Post Work</a></li>
            <li><a href="/search-work">Search Work</a></li>
            <li><Link to="services">Services</Link></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms-conditions"> </a></li>
            <li><a href="/media">Media</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Info</h4>
          <p>  MET INSTITUTE NASHIK ,Nashik, Maharashtra 422009</p>
          <p><a href="mailto:info@work4u.com">HomecareConnect.com</a></p>
          <p><a href="tel:+918421502803">+91 8421502803</a>, <a href="tel:+917219154615">+91 7219154615</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 HomeCareConnect</p>
        <div className="social-icons">
          <a href="https://facebook.com"><FaFacebookF /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://linkedin.com"><FaLinkedinIn /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="mailto:HomeCare@Connect.com"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;