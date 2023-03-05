import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../emptycard/empty.module.scss';


// images
import checkmark from '../../assets/images/checkmark.svg';

const Emptycard = () => {
  return (
    <div className={styles.empty}>
            <Image src={checkmark} />
           <h3>Sebetiniz Bosdur.</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Tempora modi possimus corporis?
           </p>
           <Link href={'/'}>Alis verise davam et</Link>
    </div>
  )
}

export default Emptycard;