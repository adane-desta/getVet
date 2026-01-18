import styles from './Signup.module.css';

function Signup() {
  return (
    <>
      {/* ===== HEADER SECTION (OUTSIDE FORM CONTAINER) ===== */}
      <div className={styles.header}>
        <h1>Join Our Community</h1>
        <p>Action for Animal Health</p>
      </div>

      {/* ===== FORM CONTAINER ===== */}
      <div className={styles.formContainer}>
        {/* Language selector */}
        <div className={styles.languageSelector}>
          <select>
            <option>English</option>
          </select>
        </div>

        {/* Form header */}
        <div className={styles.formHeader}>
          <h1>Join Our Community</h1>
          <p>
            Action for Animal Health is an initiative of <a href="#">Brooke</a>.
          </p>
          <p>
            We will use your personal data to send you information on the Action
            for Animal Health initiative, including news, events, and
            publications. You can opt out at any time.
          </p>
        </div>

        {/* Role toggle buttons */}
        <div className={styles.toggleOptions}>
          <button className={`${styles.roleBtn} ${styles.active}`}>
            Join As Doctors
          </button>
          <button className={styles.roleBtn}>
            Join As Farmers
          </button>
        </div>

        {/* Form */}
        <form>
          <div className={styles.formGroup}>
            <label>
              Title <span className={styles.required}>*</span>
            </label>
            <select>
              <option>Please select</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>
              First Name <span className={styles.required}>*</span>
            </label>
            <input type="text" placeholder="Enter your first name" />
          </div>

          <div className={styles.formGroup}>
            <label>
              Last Name <span className={styles.required}>*</span>
            </label>
            <input type="text" placeholder="Enter your last name" />
          </div>

          <div className={styles.formGroup}>
            <label>
              Email Address <span className={styles.required}>*</span>
            </label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className={styles.formGroup}>
            <label>
              Phone Number <span className={styles.required}>*</span>
            </label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>

          <div className={styles.formGroup}>
            <label>
              Organization <span className={styles.required}>*</span>
            </label>
            <input type="text" placeholder="Enter your organization" />
          </div>

          <div className={styles.formGroup}>
            <label>
              Specialty <span className={styles.required}>*</span>
            </label>
            <input type="text" placeholder="Enter your field of specialty" />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
