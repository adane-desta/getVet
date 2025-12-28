

function Features() {

    return (

        <div>

            {/* Features */}
            <section className="features" id="features">
                <div className="sectionHeader">
                    <h2 className="sectionTitle">
                        Everything You Need for <span className="highlight">Animal Health</span>
                    </h2>
                    <p className="sectionSubtitle">
                        Comprehensive tools for farmers and veterinarians
                    </p>
                </div>

                <div className="featuresGrid">
                    <div className="featureCard">
                        <div className="featureIcon">
                            <i className="fas fa-tractor"></i>
                        </div>
                        <h3>For Farmers</h3>
                        <p>
                            Expert advice to keep your livestock healthy, productive and profitable.
                        </p>
                        <ul className="featureList">
                            <li><i className="fas fa-check"></i> Disease Prevention</li>
                            <li><i className="fas fa-check"></i> Nutrition Guidance</li>
                            <li><i className="fas fa-check"></i> Emergency Support</li>
                        </ul>
                    </div>

                    <div className="featureCard">
                        <div className="featureIcon">
                            <i className="fas fa-user-md"></i>
                        </div>
                        <h3>For Veterinarians</h3>
                        <p>
                            Expand your practice with digital consultations and professional
                            networking.
                        </p>
                        <ul className="featureList">
                            <li><i className="fas fa-check"></i> Digital Consultations</li>
                            <li><i className="fas fa-check"></i> Case Management</li>
                            <li><i className="fas fa-check"></i> Professional Network</li>
                        </ul>
                    </div>

                    <div className="featureCard">
                        <div className="featureIcon">
                            <i className="fas fa-calendar-check"></i>
                        </div>
                        <h3>Smart Appointments</h3>
                        <p>
                            Schedule, manage and track appointments with our intelligent booking
                            system.
                        </p>
                        <ul className="featureList">
                            <li><i className="fas fa-check"></i> Online Booking</li>
                            <li><i className="fas fa-check"></i> Automatic Reminders</li>
                            <li><i className="fas fa-check"></i> Visit History</li>
                        </ul>
                    </div>

                    <div className="featureCard">
                        <div className="featureIcon">
                            <i className="fas fa-book-medical"></i>
                        </div>
                        <h3>Health Resources</h3>
                        <p>
                            Access articles, guides and treatment protocols for common animal
                            conditions.
                        </p>
                        <ul className="featureList">
                            <li><i className="fas fa-check"></i> Treatment Guides</li>
                            <li><i className="fas fa-check"></i> Preventive Care</li>
                            <li><i className="fas fa-check"></i> Best Practices</li>
                        </ul>
                    </div>

                    <div className="featureCard">
                        <div className="featureIcon">
                            <i className="fas fa-bell"></i>
                        </div>
                        <h3>Disease Alerts</h3>
                        <p>
                            Get notified about disease outbreaks in your region with preventive
                            recommendations.
                        </p>
                        <ul className="featureList">
                            <li><i className="fas fa-check"></i> Outbreak Alerts</li>
                            <li><i className="fas fa-check"></i> Preventive Measures</li>
                            <li><i className="fas fa-check"></i> Regional Updates</li>
                        </ul>
                    </div>

                    <div className="featureCard">
                        <div className="featureIcon">
                            <i className="fas fa-comments"></i>
                        </div>
                        <h3>Expert Q&amp;A</h3>
                        <p>
                            Ask questions and get answers from veterinary experts within hours.
                        </p>
                        <ul className="featureList">
                            <li><i className="fas fa-check"></i> Quick Responses</li>
                            <li><i className="fas fa-check"></i> Verified Experts</li>
                            <li><i className="fas fa-check"></i> Community Support</li>
                        </ul>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Features;