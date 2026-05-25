import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaCloud } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding glass">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link to="/" className="logo flex items-center gap-1 mb-4">
            <FaCloud className="text-primary text-2xl" />
            <span className="font-bold text-xl">CloudLearn</span>
          </Link>
          <p className="text-secondary mb-4">
            Empowering students with cloud computing, AWS, and DevOps skills for the future.
          </p>
          <div className="social-links flex gap-2">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="footer-links">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="font-bold mb-4">Newsletter</h4>
          <p className="text-sm text-secondary mb-2">Subscribe to get the latest updates.</p>
          <form className="newsletter-form flex gap-1">
            <input type="email" placeholder="Your email" className="input-field" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom text-center text-sm text-secondary mt-8">
        <p>&copy; {new Date().getFullYear()} CloudLearn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
