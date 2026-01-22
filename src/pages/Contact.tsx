import { contactInfo } from '../data/contact';
import SocialLinks from '../components/common/SocialLinks';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h4>{contactInfo.name}</h4>
          <h5>{contactInfo.email}</h5>
          <h6>{contactInfo.phone}</h6>
          <SocialLinks />
        </div>
        <div className={styles.emailSection}>
          <h3>GET IN TOUCH</h3>
          <p>Feel free to reach out to me via email or connect with me on social media!</p>
          <a href={`mailto:${contactInfo.email}`} className={styles.emailButton}>
            <b>Send Email</b>
          </a>
        </div>
      </div>
    </article>
  );
}
