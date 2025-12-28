

function HowItWorks() {

    return (

        <div>

            {/* How It Works */}
            <section className="howItWorks" id="how-it-works">
                <div className="sectionHeader">
                    <h2 className="sectionTitle">
                        How It <span className="highlight">Works</span>
                    </h2>
                    <p className="sectionSubtitle">Get started in just 3 simple steps</p>
                </div>

                <div className="stepsContainer">
                    <div className="stepLine"></div>

                    <div className="step">
                        <div className="stepNumber">01</div>
                        <div className="stepIcon">
                            <i className="fas fa-user-plus"></i>
                        </div>
                        <div className="stepContent">
                            <h3>Create Your Account</h3>
                            <p>
                                Sign up as a farmer or veterinarian. It&apos;s free and takes less than
                                2 minutes.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <div className="stepNumber">02</div>
                        <div className="stepIcon">
                            <i className="fas fa-clipboard-check"></i>
                        </div>
                        <div className="stepContent">
                            <h3>Set Up Your Profile</h3>
                            <p>
                                Tell us about your farm or veterinary expertise to get personalized
                                recommendations.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <div className="stepNumber">03</div>
                        <div className="stepIcon">
                            <i className="fas fa-comments"></i>
                        </div>
                        <div className="stepContent">
                            <h3>Connect &amp; Get Help</h3>
                            <p>
                                Start asking questions, schedule appointments, or access our resource
                                library.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="demoVideo">
                    <div className="videoThumbnail">
                        <div className="playButton">
                            <i className="fas fa-play"></i>
                        </div>
                        <p>Watch a 2-minute demo</p>
                    </div>
                </div>
            </section>


        </div>
    )
}
export default HowItWorks;