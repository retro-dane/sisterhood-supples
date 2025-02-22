import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./navbar.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <StaticImage
          src="../assets/images/sisterhood-supplies-logo-removebg-preview.jpg"
          alt="Sisterhood Supplies"
          placeholder="blurred"
          layout="fixed"
          width={150}
          height={60}
        />
      </Link>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Navigation Links */}
      <div className={`${styles.navlinks} ${isOpen ? styles.open : ""}`}>
        <Link to="/about" className={styles.navlink} onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/donate" className={styles.navlink} onClick={() => setIsOpen(false)}>Donate</Link>
        <Link to="/contact" className={styles.navlink} onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;