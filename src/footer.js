import React from 'react';
import './footer.css';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import twitter from './twitterpng.png';
import facebook from './Vector.png';
export default function Footer() {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="footer-1">
          <h3>QUICK LINKS</h3>
          <ul className="footer-1-links">
            <li>Company</li>
            <li>How it works</li>
            <li> About us</li>
            <li>Partnership</li>
            <li>Blogs</li>
            <li>Customer Support</li>
          </ul>
          <div className="copyright">Copyright © 2021 Flex</div>
        </div>
        <div className="footer-2">
          <h3>Newsletter</h3>
          <ul className="footer-2-links">
            <li>Subscribe to our weekly Newsletter</li>
            <li>
              <input type="text" name="email" placeholder="Enter email"></input>
            </li>
          </ul>
          <button className="submit-btn">SUBMIT</button>
        </div>
        <div className="footer-3">
          <h2>Contact Us</h2>
          <ul className="footer-3-links">
            <li>Email: info@flex.com</li>
            <li>Tel: +234 800 123 5976, 700 125 7088</li>
          </ul>

          <div className="footer-icon">
            <ul>
              <li>
                <img src={facebook} alt="facebook" width="11px" height="18px" />
              </li>
              <li>
                <img
                  src={twitter}
                  alt="twitter"
                  width="17.96px"
                  height="14.59px"
                />
              </li>
              <li>
                <img
                  src={instagram}
                  alt="instagram"
                  width="15.75px"
                  height="15.75px"
                />
              </li>
              <li>
                <img
                  src={linkedin}
                  alt="linkedin"
                  width="15.75px"
                  height="15.75px"
                />
              </li>
            </ul>
          </div>
          <div className="terms">
            <h3>Terms & Conditions</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
