"use client";
import { useState } from "react";
import styles from '@/app/page.module.css';

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <div className={styles.main}>
      <p className={styles.sign} align='center'>
        Register
      </p>
      <form className={styles.form1}>
        <input className={styles.username} type='text' placeholder='Username' />
        <input
          className={styles.password}
          type='password'
          placeholder='Password'
        />
        <a className={styles.submit} align='center'>
          Register
        </a>
        <p className={styles.formText}>Already registered? <a href="/navigation/login">Login Here</a></p>
      </form>
      
    </div>
  );
}
