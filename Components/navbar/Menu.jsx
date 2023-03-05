import React from 'react';
import styles from  '../navbar/menu.module.scss';
import Link from 'next/link';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Menu = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>Logo</div>
      <div className={styles.navbar__items}>
        <div className={styles.navbar__item}>Home</div>
        <div className={styles.navbar__item}>Blogs</div>
        <div className={styles.navbar__item}><Link href={`saved`}>{<FaRegHeart/>}</Link></div>
      </div>
    </nav>
  )
}

export default Menu;