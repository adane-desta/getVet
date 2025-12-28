

function Testimonials() {

    return (

        <div>

            {/* Testimonials */}
            <section className="testimonials" id="testimonials">
                <div className="sectionHeader">
                    <h2 className="sectionTitle">
                        What Our <span className="highlight">Users Say</span>
                    </h2>
                    <p className="sectionSubtitle">
                        Trusted by farmers and veterinarians across Ethiopia
                    </p>
                </div>

                <div className="testimonialsContainer">
                    <div className="swiper testimonialsSwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide testimonialCard">
                                <div className="testimonialContent">
                                    <div className="quoteIcon">
                                        <i className="fas fa-quote-left"></i>
                                    </div>

                                    <p className="testimonialText">
                                        This platform transformed how I manage my cattle farm. I used to
                                        lose 2–3 calves every season to disease, but with the expert advice
                                        I receive here, I haven&apos;t lost a single one in the past year.
                                    </p>

                                    <div className="testimonialAuthor">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            alt="User"
                                        />
                                        <div className="authorInfo">
                                            <h4>Kebede Mulugeta</h4>
                                            <p>Dairy Farmer, Oromia</p>
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide testimonialCard">
                                <div className="testimonialContent">
                                    <div className="quoteIcon">
                                        <i className="fas fa-quote-left"></i>
                                    </div>

                                    <p className="testimonialText">
                                        As a veterinarian in a remote area, this platform helps me reach
                                        more farmers and provide timely advice. The appointment system has
                                        doubled my client base while reducing travel time.
                                    </p>

                                    <div className="testimonialAuthor">
                                        <img
                                            src="https://randomuser.me/api/portraits/women/44.jpg"
                                            alt="User"
                                        />
                                        <div className="authorInfo">
                                            <h4>Dr. Selamawit Tesfaye</h4>
                                            <p>Veterinarian, Amhara</p>
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide testimonialCard">
                                <div className="testimonialContent">
                                    <div className="quoteIcon">
                                        <i className="fas fa-quote-left"></i>
                                    </div>

                                    <p className="testimonialText">
                                        The disease alerts saved my entire poultry farm during the recent
                                        outbreak. I received preventive measures before the disease
                                        reached my area. This service is invaluable!
                                    </p>

                                    <div className="testimonialAuthor">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/65.jpg"
                                            alt="User"
                                        />
                                        <div className="authorInfo">
                                            <h4>Asrat Wolde</h4>
                                            <p>Poultry Farmer, SNNPR</p>
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-pagination"></div>
                    </div>
                </div>

                <div className="testimonialStats">
                    <div className="statBox">
                        <div className="statValue">4.8/5</div>
                        <div className="statLabel">Average Rating</div>
                    </div>

                    <div className="statBox">
                        <div className="statValue">98%</div>
                        <div className="statLabel">Would Recommend</div>
                    </div>

                    <div className="statBox">
                        <div className="statValue">24h</div>
                        <div className="statLabel">Avg. Response Time</div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Testimonials;