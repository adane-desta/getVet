

function MobileMenu() {

    return (

        <div>
            {/* Mobile Menu */}
            <div className="mobileMenuOverlay"></div>

            <nav className="mobileNav">
                <div className="mobileNavHeader">
                    <div className="logo">
                        <i className="fas fa-heartbeat"></i>
                        <span>AnimalHealth</span>
                    </div>
                    <button className="mobileCloseBtn">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="mobileNavLinks">
                    <a href="#home" className="mobileNavLink active">
                        <i className="fas fa-home"></i> Home
                    </a>
                    <a href="#features" className="mobileNavLink">
                        <i className="fas fa-star"></i> Features
                    </a>
                    <a href="#howItWorks" className="mobileNavLink">
                        <i className="fas fa-cogs"></i> How It Works
                    </a>
                    <a href="#testimonials" className="mobileNavLink">
                        <i className="fas fa-comment-dots"></i> Testimonials
                    </a>
                    <a href="/frontEnd/html-files/loginpage.html" className="mobileNavLink">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </a>
                    <a href="/join-us.html" className="mobileNavLink highlight">
                        <i className="fas fa-user-plus"></i> Join Now
                    </a>
                </div>

                <div className="mobileLanguage">
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