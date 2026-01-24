import styles from './Signup.module.css';

function Signup() {
  return (

    <>
      <div>
      <div className={styles.header}>
        <h1>Join Our Community</h1>
        <p>Action for Animal Health</p>
      </div>

      {/* ===== FORM CONTAINER ===== */}
      <div className={styles.formContainer}>

        {/* Form header */}
        <div className={styles.formHeader}>
          <h1>Join Our Community</h1>
          <p>
            We will use your personal data to send you information on the Action
            for Animal Health initiative, including news, events, and
            publications. You can opt out at any time.
          </p>
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
      </div>
    </>

  );
}

export default Signup;
