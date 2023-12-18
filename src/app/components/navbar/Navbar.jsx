import Link from "next/link";
import styles from '../page.module.css';

export default function Navbar() {
  return (
    <div className={styles.navBar}>
      <Link href={"/"}>Home</Link>
      <Link href={"/subreddits"}>Subreddits</Link>
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
      <Link href={"/logout"}>Logout</Link>
    </div>
  );
}
