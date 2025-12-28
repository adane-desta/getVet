

function Navbar() {

    return (

        <div>

            {/* Header */}
            <header className="header">
                <div className="headerContainer">
                    <div className="logo">
                        <i className="fas fa-heartbeat"></i>
                        <span>AnimalHealth</span>
                    </div>

                    <nav className="desktopNav">
                        <a href="#features">Features</a>
                        <a href="#howItWorks">How It Works</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="/frontEnd/html-files/loginpage.html" className="loginBtn">
                            Login
                        </a>
                        <a href="/join-us.html" className="joinBtn">
                            Join Now
                        </a>

                        <div className="languageSelector">
                            <select id="languageSelector">
                                <option value="en">🇬🇧 EN</option>
                                <option value="am">🇪🇹 AM</option>
                                <option value="or">🇪🇹 OR</option>
                            </select>
                        </div>
                    </nav>

                    <button className="mobileMenuBtn">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </header>

        </div>
    )
}

export default Navbar;