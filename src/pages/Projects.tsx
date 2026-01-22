import { projects } from '../data/projects';
import ProjectCard from '../components/Cards/ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <article className={styles.article}>
      <h2>PROFESSIONAL PROJECTS</h2>
      <div className={styles.subtitle}>My Work</div>
      <div className={styles.cardList}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </article>
  );
}
