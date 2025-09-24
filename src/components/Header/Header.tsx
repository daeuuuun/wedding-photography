import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/img/Logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
        </ul>

        <div className={styles.logo}>
          <Link to="/home"><img src={logo} alt="로고" /></Link>
        </div>

        <ul className={styles.menu}>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </nav>

      <ul className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </header>
  );
}

export default Header;
