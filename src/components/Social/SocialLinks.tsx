import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import styles from './SocialLinks.module.css';

interface SocialLinksProps {
  linkedin: string;
  email: string;
}

export function SocialLinks({ linkedin, email }: SocialLinksProps) {
  return (
    <div className={styles.container}>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <div className={styles.iconWrapper}>
          <Linkedin size={20} />
        </div>
        <span className={styles.label}>LinkedIn</span>
        <ArrowUpRight size={14} className={styles.arrow} />
      </a>
      <div className={styles.divider} />
      <a
        href={`mailto:${email}`}
        className={styles.link}
      >
        <div className={styles.iconWrapper}>
          <Mail size={20} />
        </div>
        <span className={styles.label}>Email</span>
        <ArrowUpRight size={14} className={styles.arrow} />
      </a>
    </div>
  );
}
