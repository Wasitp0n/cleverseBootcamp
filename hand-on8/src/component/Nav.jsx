import React from "react";
import navbar from "./Nav.module.css";
import image from "./image/logo_cleverse.png";

function Nav() {
  return (
    <div className={navbar.head}>
      <img className={navbar.logo} src={image} alt="logo"></img>
      <nav>
        <ul className={navbar.nav_links}>
          <li>About Us</li>
          <li>Blog</li>
          <li>Career</li>
          <li>Contact Us</li>
          <button>o</button>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
