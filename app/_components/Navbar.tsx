import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/">DIZZITAL</Link>
      </div>
      <ul className={styles.navbarMenu}>
        <li><Link href="/prix">Prix</Link></li>
        <li><Link href="/connexion">Connexion</Link></li>
        <li><Link href="/inscription">Inscription</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;