import { about } from '../../data/content';
import styles from './AboutCard.module.css';

export function AboutCard() {
  return (
    <div className={styles.container}>
      <div className={styles.avatarWrapper}>
        <img
          src="/headshot.png"
          alt={about.name}
          className={styles.avatar}
        />
        <div className={styles.avatarGlow}></div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.name}>{about.name}</h1>
        <p className={styles.title}>{about.title}</p>
        <p className={styles.bio}>{about.bio}</p>
      </div>
    </div>
  );
}
