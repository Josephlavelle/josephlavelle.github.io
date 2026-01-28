import { BookOpen } from 'lucide-react';
import { currentlyReading } from '../../data/content';
import styles from './ReadingCard.module.css';

export function ReadingCard() {
  return (
    <a
      href={currentlyReading.goodreadsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <div className={styles.header}>
        <BookOpen size={16} className={styles.icon} />
        <span className={styles.label}>Currently Reading</span>
      </div>
      <div className={styles.book}>
        <div className={styles.cover}>
          {currentlyReading.coverEmoji?.startsWith('http') ? (
            <img
              src={currentlyReading.coverEmoji}
              alt={currentlyReading.title}
              className={styles.coverImage}
            />
          ) : (
            currentlyReading.coverEmoji || '📖'
          )}
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{currentlyReading.title}</h3>
          <p className={styles.author}>{currentlyReading.author}</p>
        </div>
      </div>
    </a>
  );
}
