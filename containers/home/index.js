'use client';

import React from 'react';
import Carousel from '@/components/carousel';
import styles from './styles.module.css';

const images = [
  { src: '/images/Berkelogox-Photoroom.jpg', alt: 'Project 1', link: '/projects/whoami' },
  { src: '/images/istanbulevent.jpg', alt: 'Project 2', link: '/projects/project2' },
  { src: '/images/project3.jpg', alt: 'Project 3', link: '/projects/project3' },
];

function HomeContainer() {
  return (
    <div className={styles.homeContainer}>
      <h1>Kuzeyli Projects</h1>
      <p>WELCOME</p>
      <Carousel images={images} />
    </div>
  );
}

export default HomeContainer;
