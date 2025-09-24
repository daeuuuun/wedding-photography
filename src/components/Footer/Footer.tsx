import React from "react";
import { Link } from "react-router-dom"; // 추가
import styles from "./Footer.module.css";
import logo from "../../assets/img/Logo.png";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
        </ul>

        <div className={styles.logo}>
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul className={styles.menu}>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>

      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur. Morbi volut tempus posuere viverra massa fames sed.
        Dignissim urisus et ac egestas dignissim.
      </p>

      <div className={styles.socials}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>

      <p className={styles.copy}>Copyright 2024 All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
