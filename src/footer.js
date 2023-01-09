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
          <div>Copyright © 2021 Flex</div>
        </div>
        <div className="footer-2">
          <h3>Newsletter</h3>
          <ul className="footer-2-links">
            <li>Subscribe to our weekly Newsletter</li>
            <li>
              <input type="text" name="email" placeholder="email"></input>
            </li>
          </ul>
          <button>submit</button>
        </div>
        <div className="footer-3">
          <h3>Contact Us</h3>
          <ul className="footer-3-links">
            <li>Email: info@flex.com</li>
            <li>Tel: +234 800 123 5976, 700 125 7088</li>
          </ul>

          <div>
            <img src={facebook} alt="facebook" width="42.35px" />
            <img src={twitter} alt="twitter" width="42.35px" />
            <img src={instagram} alt="instagram" width="42.35px" />
            <img src={linkedin} alt="linkedin" width="42.35px" />
          </div>
          <div>
            <h3>Terms & Conditions</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
