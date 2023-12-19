import Link from 'next/link';
import styles from '@/app/page.module.css';

export default function Navbar() {

  

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <Link className={styles.logoLink} href={'/'}>
          <img className={styles.logo} src='/redditclonelogo.png' alt='logo' />
        </Link>
      </div>

      <div className={styles.navBar}>
        <Link className={styles.link} href={'/'}>
          Home
        </Link>
        <Link className={styles.link} href={'/navigation/subreddits'}>
          Subreddits
        </Link>
        <Link className={styles.link} href={'/navigation/logout'}>
          Logout
        </Link>
      </div>

      <div className={styles.navBtnContainer}>
        <Link href='/navigation/login'>
          <button className={styles.navBtn}>Login</button>
        </Link>
        <Link href='/navigation/register'>
          <button className={styles.navBtn}>Register</button>
        </Link>

        

      </div>
    </nav>
  );
}
