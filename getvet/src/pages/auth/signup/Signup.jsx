

import styles from './Signup.module.css';

function Signup() {
  return (
    <>
      <header className={styles.header}>
        <h1>Join Our Community</h1>
        <p>Action for Animal Health</p>
      </header>

      <div className={styles.formContainer}>
        <div className={styles.languageSelector}>
          <select id="language-selector">
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
            <option value="or">Afaan Oromoo</option>
          </select>
        </div>

        <h1 style={{ marginLeft: '30%' }}>Join Our Community</h1>

        <div className={styles.toggleOptions}>
          <button id="doctor-btn" className={`${styles.roleBtn} ${styles.active}`}>
            Join As Doctors
          </button>
          <button id="farmer-btn" className={styles.roleBtn}>
            Join As Farmers
          </button>
        </div>

        {/* Doctor Form */}
        <form id="doctor-form" className={`${styles.form} ${styles.doctorForm}`}>
          <div className={styles.formHeader}>
            <p>
              Action for Animal Health is an initiative of <a href="#">Brooke</a>.
            </p>
            <p>
              We will use your personal data to send you information on the Action
              for Animal Health initiative, including news, events, and
              publications. You can opt out at any time.
            </p>
          </div>

          <div className={styles.formGroup}>
            <label>Title</label>
            <select id="doctor_title" required>
              <option value="" disabled selected>
                Please select
              </option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
            </select>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>
                First Name <span className={styles.required}>*</span>
              </label>
              <input type="text" required placeholder="Enter your first name" />
            </div>

            <div className={styles.formGroup}>
              <label>
                Last Name <span className={styles.required}>*</span>
              </label>
              <input type="text" required placeholder="Enter your last name" />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>
                Email Address <span className={styles.required}>*</span>
              </label>
              <input type="email" required placeholder="Enter your email" />
            </div>

            <div className={styles.formGroup}>
              <label>
                Phone Number <span className={styles.required}>*</span>
              </label>
              <input type="tel" pattern="(09\\d{8})" required />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>
                Organization <span className={styles.required}>*</span>
              </label>
              <input type="text" required />
            </div>

            <div className={styles.formGroup}>
              <label>
                Specialty <span className={styles.required}>*</span>
              </label>
              <input type="text" />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>
                Password <span className={styles.required}>*</span>
              </label>
              <input type="password" required />
            </div>

            <div className={styles.formGroup}>
              <label>
                Confirm Password <span className={styles.required}>*</span>
              </label>
              <input type="password" required />
            </div>
          </div>

          <div className={styles.formGroup}>
            <p>
              How would you describe yourself?{' '}
              <span className={styles.required}>*</span>
            </p>
            <div className={styles.checkboxGroup}>
              <label><input type="checkbox" /> Researcher</label>
              <label><input type="checkbox" /> Veterinarian</label>
              <label><input type="checkbox" /> NGO Professional</label>
              <label><input type="checkbox" /> Policymaker</label>
              <label><input type="checkbox" /> Human Health Professional</label>
              <label><input type="checkbox" /> Other</label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>
              <input type="checkbox" /> I’m happy to receive emails about Action
              for Animal Health
            </label>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>

        {/* Farmer Form */}
        <form id="farmer-form" className={`${styles.form} ${styles.farmerForm}`}>
          <div className={styles.formHeader}>
            <p>Action for Animal Health is an initiative of.</p>
            <p>
              We will use your personal data to send you information on the Action
              for Animal Health initiative, including news, events, and
              publications. You can opt out at any time.
            </p>
          </div>

          <div className={styles.formGroup}>
            <label>Title</label>
            <select required>
              <option value="" disabled selected>
                Please select
              </option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
            </select>
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
