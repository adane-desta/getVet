import styles from './Hero.module.css';

function Hero() {
    return (
        <div>
            {/* Hero Section */}
            <section className={styles.hero} id='hero'>
                <div className={styles.heroOverlay}></div>

                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Better Health for Every Animal</h1>

                    <p className={styles.heroSubtitle}>
                        Connecting farmers with veterinary experts for healthier livestock and
                        sustainable farming
                    </p>

                    <div className={styles.heroStats}>
                        <div className={styles.stat}>
                            <h3>5000+</h3>
                            <p>Farmers Connected</p>
                        </div>

                        <div className={styles.stat}>
                            <h3>200+</h3>
                            <p>Veterinary Experts</p>
                        </div>

                        <div className={styles.stat}>
                            <h3>24/7</h3>
                            <p>Advisory Support</p>
                        </div>
                    </div>

                    <div className={styles.heroButtons}>
                        <a href="/join-us.html" className={styles.btnPrimary}>
                            <i className="fas fa-user-plus"></i> Join Now – It&apos;s Free
                        </a>

                        <a href="#features" className={styles.btnSecondary}>
                            <i className="fas fa-play-circle"></i> See How It Works
                        </a>
                    </div>
                </div>

                <div className={styles.scrollIndicator}>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </section>
        </div>
    )
}

export default Hero;
