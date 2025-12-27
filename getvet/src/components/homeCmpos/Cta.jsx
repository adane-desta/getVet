

function Cta() {

    return (
        <div>

            {/* CTA Section */}
            <section className="ctaSection">
                <div className="ctaContainer">
                    <div className="ctaContent">
                        <h2>Start Your Journey to Better Animal Health</h2>
                        <p>
                            Join thousands of farmers and veterinarians who trust our platform for
                            animal care
                        </p>

                        <div className="ctaButtons">
                            <a href="/join-us.html" className="btnCtaPrimary">
                                <i className="fas fa-user-plus"></i> Create Free Account
                            </a>

                            <a
                                href="/frontEnd/html-files/loginpage.html"
                                className="btnCtaSecondary"
                            >
                                <i className="fas fa-sign-in-alt"></i> Existing User Login
                            </a>
                        </div>

                        <div className="ctaBenefits">
                            <p><i className="fas fa-check"></i> No credit card required</p>
                            <p><i className="fas fa-check"></i> Free for individual farmers</p>
                            <p><i className="fas fa-check"></i> 30-day premium trial for vets</p>
                        </div>
                    </div>

                    <div className="ctaImage">
                        <img
                            src="https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                            alt="Veterinary Care"
                        />
                    </div>
                </div>
            </section>


        </div>
    )
}
export default Cta;