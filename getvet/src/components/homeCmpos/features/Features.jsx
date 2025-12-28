import styles from "./Features.module.css";

 function Features() {
  return (
    <section className={styles.features} id="features">
      <div className="section-header">
        <h2>
          Everything You Need for <span>Animal Health</span>
        </h2>
      </div>

      <div className={styles.featuresGrid}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <i className="fas fa-tractor"></i>
          </div>
          <h3>For Farmers</h3>
          <p>Expert advice to keep livestock healthy.</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <i className="fas fa-user-md"></i>
          </div>
          <h3>For Veterinarians</h3>
          <p>Expand your practice digitally.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;