import styles from './Navbar.module.css';
import {Link} from 'react-router-dom'

function Navbar({toggleMenu}) {

    return (
        <div>
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
                        <Link to={'roleSelect'}> <a className={styles.loginBtn}>
                            Login
                        </a></Link>
                        <Link to = {'roleSelect'}> <a className={styles.joinBtn}>
                            Join Now
                        </a></Link>

                        <div className={styles.languageSelector}>
                            <select id="languageSelector">
                                <option value="en">🇬🇧 EN</option>
                                <option value="am">🇪🇹 AM</option>
                                <option value="or">🇪🇹 OR</option>
                            </select>
                        </div>
                    </nav>

                    <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar;
