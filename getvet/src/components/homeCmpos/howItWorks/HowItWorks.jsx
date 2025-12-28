import styles from "./HowItWorks.module.css";

 function HowItWorks() {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          How It <span className={styles.highlight}>Works</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Get started in just 3 simple steps
        </p>
      </div>

      <div className={styles.stepsContainer}>
        <div className={styles.stepLine}></div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>01</div>
          <div className={styles.stepIcon}>
            <i className="fas fa-user-plus"></i>
          </div>
          <div className={styles.stepContent}>
            <h3>Create Your Account</h3>
            <p>Sign up as a farmer or veterinarian. It's free.</p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>02</div>
          <div className={styles.stepIcon}>
            <i className="fas fa-clipboard-check"></i>
          </div>
          <div className={styles.stepContent}>
            <h3>Set Up Your Profile</h3>
            <p>Tell us about your farm or expertise.</p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>03</div>
          <div className={styles.stepIcon}>
            <i className="fas fa-comments"></i>
          </div>
          <div className={styles.stepContent}>
            <h3>Connect & Get Help</h3>
            <p>Ask questions or book appointments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;