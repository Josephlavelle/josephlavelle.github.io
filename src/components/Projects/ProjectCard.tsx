import { ExternalLink, Github } from 'lucide-react';
import styles from './ProjectCard.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
        <div className={styles.links}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="View on GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="View live site"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
