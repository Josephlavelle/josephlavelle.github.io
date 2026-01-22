import { Lock, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { socials } from '../data/content';
import styles from './PrivateRepo.module.css';

export function PrivateRepo() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Lock size={48} />
        </div>

        <h1 className={styles.title}>Private Repository</h1>

        <p className={styles.description}>
          This repository is currently private. If you'd like access to the source code,
          please reach out to me directly.
        </p>

        <a
          href={`mailto:${socials.email}`}
          className={styles.emailButton}
        >
          <Mail size={20} />
          Request Access
        </a>

        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
