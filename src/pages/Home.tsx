import headshot from '../assets/images/headshot.png';
import styles from './Home.module.css';

export default function Home() {
  return (
    <article className={styles.article}>
      <img src={headshot} alt="Joseph Lavelle" className={styles.headshot} />
      <h2>GET TO KNOW ME</h2>
      <p>
        Hi! Thanks for checking out my website! I'm Joe, a recent mechanical engineering
        graduate whose now pursuing a dual degree in computer science. In the past couple
        years, I've spent time working on a ton of interesting projects in both the data and
        mechatronics spaces! Programming has always been a big interest of mine, and with my
        internship as a data analyst at Cenovus, I was finally able to apply it in a professional
        setting. I learned a lot in my term there and would love to further pursue data science
        down the road in both work and graduate school. Other ongoing projects of mine include
        developing an educational robot for elementary school student
        and working as the business manager at the Tea Room - a zero-waste cafe.
      </p>
      <p>
        In my personal time, I have many hobbies! I love snowboarding, rock climbing,
        hiking and all things outdoors. While I was living in western Canada last year,
        you could find me in the mountains just about every weekend rain or shine! While
        I'm at home I'm an avid baker and cook. I love making all kinds of baked goods,
        from croissants, to scones, to macarons, I love a challenge and the satisfaction
        that comes from finally getting a difficult recipe to turn out! If you're
        interested in learning more about me, I've compiled some information on my
        professional experience and projects down below!
      </p>
    </article>
  );
}
