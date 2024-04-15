import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer style={{ backgroundColor: "#f0f0f0", padding: "20px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ textAlign: "left" }}>
            <div style={{ marginBottom: "10px" }}>
              <span><a href="#about">About</a> ⋅</span>
              <span><a href="#contact">Contact</a> ⋅</span>
              <span><a href="#terms">Terms of Use</a> ⋅</span>
              <span><a href="#privacy">Privacy Policy</a></span>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <span>© Your Website 2023. All Rights Reserved.</span>
            </div>
          </div>
          <div>
            <span>
              <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} style={{ marginRight: "10px", fontSize: "1.9rem" }} /></a>
              <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} style={{ marginRight: "10px", fontSize: "1.9rem" }} /></a>
              <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} style={{ marginRight: "10px", fontSize: "1.9rem" }} /></a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
