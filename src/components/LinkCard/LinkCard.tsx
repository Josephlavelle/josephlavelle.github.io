import { ArrowUpRight } from 'lucide-react';
import styles from './LinkCard.module.css';

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  icon?: React.ReactNode;
  tags?: string[];
  isPrivate?: boolean;
}

export function LinkCard({ title, description, url, icon, tags, isPrivate }: LinkCardProps) {
  const linkUrl = isPrivate ? '/private-repo' : url;
  const linkTarget = isPrivate ? '_self' : '_blank';

  return (
    <a
      href={linkUrl}
      target={linkTarget}
      rel={isPrivate ? undefined : "noopener noreferrer"}
      className={styles.container}
    >
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <ArrowUpRight size={18} className={styles.arrow} />
        </div>
        <p className={styles.description}>{description}</p>
        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
