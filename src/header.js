import React from 'react';
import logo from './react-logo.png';
export default function Header() {
  return (
    <div className="header">
      <div className="header-1">
        <img src={logo} alt="logo" width="42.35px" />
        <h1>Flex</h1>
      </div>
      <div className="header-2">
        <ul className="header-lists">
          <li className="header-list">
            <a href="./companypage.js"> Company</a>
          </li>
          <li className="header-list">How it works</li>

          <li className="header-list">Blogs</li>
          <li className="header-list">Partnership</li>
          <li className="button-primary">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
