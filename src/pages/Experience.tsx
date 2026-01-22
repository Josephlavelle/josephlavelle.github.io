import { experiences } from '../data/experience';
import ExperienceCard from '../components/Cards/ExperienceCard';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <article className={styles.article}>
      <h2>PROFESSIONAL HISTORY</h2>
      <div className={styles.subtitle}>My Qualifications</div>
      <div className={styles.cardList}>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </article>
  );
}
