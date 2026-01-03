import React from "react";
import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        {/* Left Content */}
        <div className={styles.ctaContent}>
          <h2>Start Your Journey to Better Animal Health</h2>
          <p>
          Join thousands of farmers and veterinarians who trust our platform for animal care
          </p>

          <div className={styles.ctaButtons}>
          <a className={styles.btnCtaPrimary}>
              <i className="fas fa-user-plus"></i> Create Free Account
          </a>
          <a class={styles.btnCtaSecondary}>
              <i class="fas fa-sign-in-alt"></i> Existing User Login
            </a>
          </div>

          <div className={styles.ctaBenefits}>
            <p>
              <i className="fas fa-check"></i> Easy to use and intuitive
            </p>
            <p>
              <i className="fas fa-check"></i> Secure and reliable
            </p>
            <p>
              <i className="fas fa-check"></i> 24/7 support available
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className={styles.ctaImage}>
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="CTA Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;