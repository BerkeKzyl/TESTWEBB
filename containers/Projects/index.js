import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const projects = [
  {
    id: 'calculator',
    title: 'Calculator',
    description: 'This is a description for project 1.',
    image: '/images/calculator.jpg',
  },
  {
    id: 'studentfinder',
    title: 'StudentFinder',
    description: 'This is a description for project 2.',
    image: '/images/student.jpg',
  },
  {
    id: 'culture-website',
    title: 'Culture Website',
    description: 'This is a description for project 3.',
    image: '/images/gezgin.jpg',
  },
];

function ProjectsContainer() {
  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.id}`} className={styles.projectLink}>
            <div className={styles.projectCard}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectsContainer;
