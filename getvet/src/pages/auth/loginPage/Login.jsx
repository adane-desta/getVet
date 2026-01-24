import { useState } from 'react';
import styles from './Login.module.css';

function Login() {

  const [formData , setFormData] = useState({email:'' , password:''})

  const handleFormChange = (e) => {

    const {id , value} = e.target;

    setFormData( (prev) => ({...prev , [id]: value}))
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if(!formData.email || !formData.password) {

      console.log('error: something went wrong')
      return;
    }


  }
  return (
    <div className={styles.pageWrapper}>
    <div className={styles.loginContainer}>

      <h1 id="welcomeText">Welcome Back</h1>

      <p id="descriptionText">
        Log in to manage your animals' health or assist farmers.
      </p>
      <form id="loginForm">
        <input
          id="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleFormChange}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit" id="loginBtn">
          Log In
        </button>
      </form>

      <p className={styles.signupLink}>
        <span id="signupText">Don't have an account?</span>{' '}
        <a href="join-us.html" id="joinText">
          Join Us
        </a>
      </p>
    </div>
    </div>
  );
}

export default Login;
