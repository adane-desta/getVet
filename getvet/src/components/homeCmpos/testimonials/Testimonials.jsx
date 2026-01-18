import styles from './Testimonials.module.css';
import { testimonials } from '../../../utils/constants';
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
                            {testimonials.map((t, index) => (
                                <SwiperSlide key={index}>
                                    <div className={`swiper-slide ${styles.testimonialCard}`}>
                                        <div className={styles.testimonialContent}>
                                            <div className={styles.quoteIcon}>
                                                <i className="fas fa-quote-left"></i>
                                            </div>
                                            <p className={styles.testimonialText}>{t.text}</p>
                                            <div className={styles.testimonialAuthor}>
                                                <img src={t.image} alt={t.author} />
                                                <div className={styles.authorInfo}>
                                                    <h4>{t.author}</h4>
                                                    <p>{t.role}</p>
                                                    <div className={styles.rating}>
                                                        {Array.from({ length: Math.floor(t.rating) }).map((_, i) => (
                                                            <i key={i} className="fas fa-star"></i>
                                                        ))}
                                                        {t.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

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
