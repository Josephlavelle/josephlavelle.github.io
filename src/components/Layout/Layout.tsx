import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from '../Navigation/Nav';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [bgOffset, setBgOffset] = useState(-150);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setBgOffset(-150 + scrollY * 0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={styles.backgroundImg}
      style={{ backgroundPositionY: `${bgOffset}px` }}
    >
      <Header />
      <Nav />
      <main className={styles.main}>
        <div className={styles.content}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
