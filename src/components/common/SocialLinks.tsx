import { contactInfo } from '../../data/contact';
import githubIcon from '../../assets/images/github.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import styles from './SocialLinks.module.css';

export default function SocialLinks() {
  return (
    <div className={styles.socialMedia}>
      <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
    </div>
  );
}
