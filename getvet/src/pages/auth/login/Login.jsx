import styles from './Login.module.css';

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.languageSelector}>
        <select id="languageSelector">
          <option value="en">English</option>
          <option value="am">አማርኛ</option>
          <option value="om">Afaan Oromoo</option>
        </select>
      </div>

      <h1 id="welcomeText">Welcome Back</h1>

      <p id="descriptionText">
        Log in to manage your animals' health or assist farmers.
      </p>

      <div className={styles.userType}>
        <label htmlFor="farmerRadio">
          <input
            type="radio"
            name="userType"
            value="farmers"
            id="farmerRadio"
          />
          <span id="farmerText">I'm a Farmer</span>
        </label>

        <label htmlFor="veterinarianRadio">
          <input
            type="radio"
            name="userType"
            value="veterinarians"
            id="veterinarianRadio"
          />
          <span id="veterinarianText">I'm a Veterinarian</span>
        </label>
      </div>

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
