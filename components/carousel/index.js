'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === current ? styles.active : ''}`}
        >
          <Link href={image.link} passHref>
            <img src={image.src} alt={image.alt} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
