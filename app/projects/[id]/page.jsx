'use client';

import React from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

const projectDetails = {
  'calculator': {
    title: 'Calculator',
    description: 'Detailed information about Calculator project.',
    images: ['/images/calculator-1.jpg', '/images/calculator-2.jpg']
  },
  'studentfinder': {
    title: 'StudentFinder',
    description: 'Detailed information about StudentFinder project.',
    images: ['/images/student-1.jpg', '/images/student-2.jpg']
  },
  'culture-website': {
    title: 'Culture Website',
    description: 'Detailed information about Culture Website project.',
    images: ['/images/gezgin-1.jpg', '/images/gezgin-2.jpg']
  },
};

function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;
  const project = projectDetails[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.projectPage}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div className={styles.imagesContainer}>
        {project.images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className={styles.projectImage} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
