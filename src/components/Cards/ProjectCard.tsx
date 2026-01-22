import type { Project } from '../../data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const iconPath = new URL(`../../assets/images/${project.icon}`, import.meta.url).href;

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={iconPath} alt={project.title} />
      </div>
      <div className={styles.header}>
        <h4>{project.title}</h4>
        <p className={styles.period}>{project.period}</p>
      </div>
      <div className={styles.description}>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
