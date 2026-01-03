import styles from './Testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
    return (
        <div>
            {/* Testimonials */}
            <section className={styles.testimonials} id="testimonials">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        What Our <span className={styles.highlight}>Users Say</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Trusted by farmers and veterinarians across Ethiopia
                    </p>
                </div>

                <div className={styles.testimonialsContainer}>
                    <div className={`swiper ${styles.testimonialsSwiper}`}>
                        <Swiper className="swiper-wrapper"
                             modules={[Autoplay, Pagination]}
                                autoplay={{ delay: 5000 }}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                                }}
                                spaceBetween={20}>
                            <SwiperSlide>
                            <div className={`swiper-slide ${styles.testimonialCard}`}>
                                <div className={styles.testimonialContent}>
                                    <div className={styles.quoteIcon}>
                                        <i className="fas fa-quote-left"></i>
                                    </div>

                                    <p className={styles.testimonialText}>
                                        This platform transformed how I manage my cattle farm. I used to
                                        lose 2–3 calves every season to disease, but with the expert advice
                                        I receive here, I haven&apos;t lost a single one in the past year.
                                    </p>

                                    <div className={styles.testimonialAuthor}>
                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            alt="User"
                                        />
                                        <div className={styles.authorInfo}>
                                            <h4>Kebede Mulugeta</h4>
                                            <p>Dairy Farmer, Oromia</p>
                                            <div className={styles.rating}>
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
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className={`swiper-slide ${styles.testimonialCard}`}>
                                <div className={styles.testimonialContent}>
                                    <div className={styles.quoteIcon}>
                                        <i className="fas fa-quote-left"></i>
                                    </div>

                                    <p className={styles.testimonialText}>
                                        As a veterinarian in a remote area, this platform helps me reach
                                        more farmers and provide timely advice. The appointment system has
                                        doubled my client base while reducing travel time.
                                    </p>

                                    <div className={styles.testimonialAuthor}>
                                        <img
                                            src="https://randomuser.me/api/portraits/women/44.jpg"
                                            alt="User"
                                        />
                                        <div className={styles.authorInfo}>
                                            <h4>Dr. Selamawit Tesfaye</h4>
                                            <p>Veterinarian, Amhara</p>
                                            <div className={styles.rating}>
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
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className={`swiper-slide ${styles.testimonialCard}`}>
                                <div className={styles.testimonialContent}>
                                    <div className={styles.quoteIcon}>
                                        <i className="fas fa-quote-left"></i>
                                    </div>

                                    <p className={styles.testimonialText}>
                                        The disease alerts saved my entire poultry farm during the recent
                                        outbreak. I received preventive measures before the disease
                                        reached my area. This service is invaluable!
                                    </p>

                                    <div className={styles.testimonialAuthor}>
                                        <img
                                            src="https://randomuser.me/api/portraits/men/65.jpg"
                                            alt="User"
                                        />
                                        <div className={styles.authorInfo}>
                                            <h4>Asrat Wolde</h4>
                                            <p>Poultry Farmer, SNNPR</p>
                                            <div className={styles.rating}>
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
                            </SwiperSlide>
                            
                        </Swiper>

                        <div className="swiper-pagination"></div>
                    </div>
                </div>

                <div className={styles.testimonialStats}>
                    <div className={styles.statBox}>
                        <div className={styles.statValue}>4.8/5</div>
                        <div className={styles.statLabel}>Average Rating</div>
                    </div>

                    <div className={styles.statBox}>
                        <div className={styles.statValue}>98%</div>
                        <div className={styles.statLabel}>Would Recommend</div>
                    </div>

                    <div className={styles.statBox}>
                        <div className={styles.statValue}>24h</div>
                        <div className={styles.statLabel}>Avg. Response Time</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials;
