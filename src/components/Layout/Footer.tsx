import { contactInfo } from '../../data/contact';
import SocialLinks from '../common/SocialLinks';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <h4>{contactInfo.name}</h4>
      <h5>{contactInfo.email}</h5>
      <h6>{contactInfo.phone}</h6>
      <SocialLinks />
      <address>&copy;{currentYear} by Joseph Lavelle</address>
    </footer>
  );
}
