import styles from '@/app/page.module.css';

export default function Login() {
  return (
    <div className={styles.main}>
      <p className={styles.sign} align='center'>
        Log In
      </p>
      <form className={styles.form1}>
        <input className={styles.username} type='text' placeholder='Username' />
        <input
          className={styles.password}
          type='password'
          placeholder='Password'
        />
        <a className={styles.submit} align='center'>
          Login
        </a>
        <p className={styles.formText}>Need to register? <a href="/navigation/register">Register Here</a></p>
      </form>
    </div>
  );
}
