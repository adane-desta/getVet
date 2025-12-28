
function Hero() {

    return (

        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="heroOverlay"></div>

                <div className="heroContent">
                    <h1 className="heroTitle">Better Health for Every Animal</h1>

                    <p className="heroSubtitle">
                        Connecting farmers with veterinary experts for healthier livestock and
                        sustainable farming
                    </p>

                    <div className="heroStats">
                        <div className="stat">
                            <h3>5000+</h3>
                            <p>Farmers Connected</p>
                        </div>

                        <div className="stat">
                            <h3>200+</h3>
                            <p>Veterinary Experts</p>
                        </div>

                        <div className="stat">
                            <h3>24/7</h3>
                            <p>Advisory Support</p>
                        </div>
                    </div>

                    <div className="heroButtons">
                        <a href="/join-us.html" className="btnPrimary">
                            <i className="fas fa-user-plus"></i> Join Now – It&apos;s Free
                        </a>

                        <a href="#features" className="btnSecondary">
                            <i className="fas fa-play-circle"></i> See How It Works
                        </a>
                    </div>
                </div>

                <div className="scrollIndicator">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </section>

        </div>
    )
}

export default Hero;