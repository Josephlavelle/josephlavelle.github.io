import { ArrowUpRight } from 'lucide-react';
import styles from './LinkCard.module.css';

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  icon?: React.ReactNode;
}

export function LinkCard({ title, description, url, icon }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <ArrowUpRight size={18} className={styles.arrow} />
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
}
