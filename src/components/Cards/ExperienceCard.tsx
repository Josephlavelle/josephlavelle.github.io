import type { Experience } from '../../data/experience';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const iconPath = new URL(`../../assets/images/${experience.icon}`, import.meta.url).href;

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={iconPath} alt={experience.company} />
      </div>
      <div className={styles.header}>
        <h4>{experience.role}, {experience.company}</h4>
        <p className={styles.period}>{experience.period}</p>
      </div>
      <div className={styles.description}>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}
