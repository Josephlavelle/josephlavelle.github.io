import styles from './BentoGrid.module.css';

interface BentoGridProps {
  children: React.ReactNode;
}

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {children}
      </div>
    </div>
  );
}
