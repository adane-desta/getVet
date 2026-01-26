import { useEffect, useState } from 'react';
import styles from './Login.module.css';
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext';

function Login() {

  const [formData , setFormData] = useState({email: '' , password: '' , role: ''})
  const {selectedRole , login} = useAuth()
  const navigation = useNavigate()

  useEffect(    ()=>{

      if(!selectedRole) {
        navigation('/roleSelect')
     }
    } , [])


  const handleFormChange = (e) => {

    const {id , value} = e.target;

    setFormData( (prev) => ({...prev , [id]: value}))
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if(!selectedRole) {
       navigation('/roleSelect')
       return;
    }

    if(!formData.email || !formData.password) {

      console.log('error: something went wrong')
      localStorage.removeItem('token')
      return;
    }

    if(formData.email === 'adane@fake.com' && formData.password === '12345'){
      console.log('login successful')
      setFormData( prev => ({...prev , role: selectedRole}))

      login(
        {
          user: formData,
          jwt: 'abcdwxyz1234' 
        }
      )
     

    }else{

      console.log('wrong credential')
      localStorage.removeItem('token')
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
