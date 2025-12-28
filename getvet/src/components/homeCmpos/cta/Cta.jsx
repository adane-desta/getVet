import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <h2>Start Your Journey to Better Animal Health</h2>
      <p>Join thousands of farmers and veterinarians</p>

      <div className={styles.ctaButtons}>
        <a href="/join-us.html">Create Free Account</a>
        <a href="/login.html">Login</a>
      </div>
    </section>
  );
}
