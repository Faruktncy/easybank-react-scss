import React from "react";
import Button from "../components/Button";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="col-1">
          <div className="footer-logo">
            <img src="./images/logo.svg" alt="footer-logo" />
          </div>
          <div className="social-media">
            <img src="images/icon-facebook.svg" alt="facebook" />
            <img src="images/icon-youtube.svg" alt="youtube" />
            <img src="images/icon-twitter.svg" alt="twitter" />
            <img src="images/icon-pinterest.svg" alt="pinterest" />
            <img src="images/icon-instagram.svg" alt="instagram" />
          </div>
        </div>
        <div className="col-2">
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li> Blog</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="col-3">
          <Button />
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
