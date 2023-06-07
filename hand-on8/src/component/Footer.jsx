import React from "react";
import navbar from "./Nav.module.css";

function Footer() {
  return (
    <div className={navbar.foot}>
      <nav>
        <ul className={navbar.nav_links}>
          <li>About Us</li>
          <li>Blog</li>
          <li>Career</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
