import styles from './Login.module.css';

function Login() {
  return (
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
  );
}

export default Login;
