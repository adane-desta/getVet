import { useState } from 'react';
import styles from './Login.module.css';
import { useAuth } from '../../../contexts/AuthContext';

function Login() {

  const [formData , setFormData] = useState({email: '' , password: ''})
  const {login} = useAuth()

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
    if(formData.email === 'adane@fake.com' && formData.password === '12345'){
      console.log('login successful')
      localStorage.setItem('user' , formData)
    }else{
      alert('wrong cridential')
    }


  }
  return (
    <div className={styles.pageWrapper}>
    <div className={styles.loginContainer}>

      <h1 id="welcomeText">Welcome Back</h1>

      <p id="descriptionText">
        Log in to manage your animals' health or assist farmers.
      </p>
      <form id="loginForm" onSubmit={handleSubmit}>
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
          onChange={handleFormChange}
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
