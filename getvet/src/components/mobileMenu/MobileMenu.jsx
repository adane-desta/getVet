import style from './MobileMenu.module.css'

function MobileMenu() {
    return (
        <div>
            {/* Mobile Menu */}
            <div className={style.mobileMenuOverlay}></div>

            <nav className={style.mobileNav}>
                <div className={style.mobileNavHeader}>
                    <div className={style.logo}>
                        <i className="fas fa-heartbeat"></i>
                        <span>AnimalHealth</span>
                    </div>
                    <button className={style.mobileCloseBtn}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className={style.mobileNavLinks}>
                    <a href="#home" className={`${style.mobileNavLink} ${style.active}`}>
                        <i className="fas fa-home"></i> Home
                    </a>
                    <a href="#features" className={style.mobileNavLink}>
                        <i className="fas fa-star"></i> Features
                    </a>
                    <a href="#howItWorks" className={style.mobileNavLink}>
                        <i className="fas fa-cogs"></i> How It Works
                    </a>
                    <a href="#testimonials" className={style.mobileNavLink}>
                        <i className="fas fa-comment-dots"></i> Testimonials
                    </a>
                    <a href="/frontEnd/html-files/loginpage.html" className={style.mobileNavLink}>
                        <i className="fas fa-sign-alt"></i> Login
                    </a>
                    <a href="/join-us.html" className={`${style.mobileNavLink} ${style.highlight}`}>
                        <i className="fas fa-user-plus"></i> Join Now
                    </a>
                </div>

                <div className={style.mobileLanguage}>
                    <select id="mobileLanguageSelector">
                        <option value="en">🇬🇧 English</option>
                        <option value="am">🇪🇹 አማርኛ</option>
                        <option value="or">🇪🇹 Afaan Oromoo</option>
                    </select>
                </div>
            </nav>
        </div>
    )
}

export default MobileMenu;
