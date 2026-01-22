import { motion } from 'framer-motion';
import styles from './BentoGrid.module.css';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  clickable?: boolean;
}

export function BentoCard({ children, className = '', delay = 0, clickable = false }: BentoCardProps) {
  const interactionClass = clickable ? 'clickable' : 'static';

  return (
    <motion.div
      className={`${styles.card} ${className} ${interactionClass}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}
