import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Faites des beaux formulaires simples et amusants !</h1>
      <div className={styles.menu}>
        <Link href="/formulaires" className={styles.menuItem}>Créez un Formulaire</Link>
        <Link href="/templates" className={styles.menuItem}>Templates de Formulaires</Link>
        <Link href="/support" className={styles.menuItem}>Support</Link>
        <Link href="/contact" className={styles.menuItem}>Contact</Link>
      </div>
    </div>
  );
};

export default Menu;