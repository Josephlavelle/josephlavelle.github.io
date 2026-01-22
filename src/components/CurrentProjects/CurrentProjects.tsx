import { Rocket } from 'lucide-react';
import { currentProjects } from '../../data/content';
import styles from './CurrentProjects.module.css';

export function CurrentProjects() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Rocket size={16} className={styles.icon} />
        <span className={styles.label}>Current Projects</span>
      </div>
      <ul className={styles.list}>
        {currentProjects.map((project, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.bullet}>-</span>
            <span className={styles.text}>{project}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
