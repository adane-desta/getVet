import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className='container'>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.logo}>
                        <i className="fas fa-heartbeat"></i>
                        <span>AnimalHealth</span>
                    </div>

                    <nav className={styles.desktopNav}>
                        <a href="#features">Features</a>
                        <a href="#howItWorks">How It Works</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="/frontEnd/html-files/loginpage.html" className={styles.loginBtn}>
                            Login
                        </a>
                        <a href="/join-us.html" className={styles.joinBtn}>
                            Join Now
                        </a>

                        <div className={styles.languageSelector}>
                            <select id="languageSelector">
                                <option value="en">🇬🇧 EN</option>
                                <option value="am">🇪🇹 AM</option>
                                <option value="or">🇪🇹 OR</option>
                            </select>
                        </div>
                    </nav>

                    <button className={styles.mobileMenuBtn}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar;
