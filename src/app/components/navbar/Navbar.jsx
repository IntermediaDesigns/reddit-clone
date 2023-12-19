import Link from "next/link";
import styles from '@/app/page.module.css';

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <img src='/logo2.png' alt='logo'/></div>
      <div className={styles.navBar}>
      <Link href={"/"}>Home</Link>
      <Link href={"/subreddits"}>Subreddits</Link>
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
      <Link href={"/logout"}>Logout</Link>
      </div>
    </div>
  );
}
