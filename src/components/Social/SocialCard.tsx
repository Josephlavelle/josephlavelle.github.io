import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import styles from './SocialCard.module.css';

type SocialType = 'github' | 'linkedin' | 'email';

interface SocialCardProps {
  type: SocialType;
  url: string;
}

const socialConfig = {
  github: {
    icon: Github,
    label: 'GitHub',
    description: 'Check out my code'
  },
  linkedin: {
    icon: Linkedin,
    label: 'LinkedIn',
    description: "Let's connect"
  },
  email: {
    icon: Mail,
    label: 'Email',
    description: 'Get in touch'
  }
};

export function SocialCard({ type, url }: SocialCardProps) {
  const config = socialConfig[type];
  const Icon = config.icon;

  const href = type === 'email' ? `mailto:${url}` : url;

  return (
    <a
      href={href}
      target={type === 'email' ? undefined : '_blank'}
      rel={type === 'email' ? undefined : 'noopener noreferrer'}
      className={styles.container}
    >
      <div className={styles.iconWrapper}>
        <Icon size={24} />
      </div>
      <div className={styles.content}>
        <span className={styles.label}>{config.label}</span>
        <span className={styles.description}>{config.description}</span>
      </div>
      <ArrowUpRight size={18} className={styles.arrow} />
    </a>
  );
}
