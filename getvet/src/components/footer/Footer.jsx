import style from './Footer.module.css'

function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className={style.footer}>
                <div className={style.footerContainer}>
                    <div className={style.footerSection}>
                        <div className={style.footerLogo}>
                            <i className="fas fa-heartbeat"></i>
                            <span>AnimalHealth</span>
                        </div>
                        <p className={style.footerDescription}>
                            Connecting farmers with veterinary expertise for healthier animals and
                            sustainable agriculture.
                        </p>
                        <div className={style.footerSocial}>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-telegram"></i></a>
                        </div>
                    </div>

                    <div className={style.footerSection}>
                        <h4>Quick Links</h4>
                        <ul className={style.footerLinks}>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#how-it-works">How It Works</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Help Center</a></li>
                        </ul>
                    </div>

                    <div className={style.footerSection}>
                        <h4>Resources</h4>
                        <ul className={style.footerLinks}>
                            <li><a href="#">Livestock Care Guide</a></li>
                            <li><a href="#">Disease Prevention</a></li>
                            <li><a href="#">Veterinary Resources</a></li>
                            <li><a href="#">Market Prices</a></li>
                            <li><a href="#">Research Papers</a></li>
                        </ul>
                    </div>

                    <div className={style.footerSection}>
                        <h4>Contact</h4>
                        <ul className={style.footerContact}>
                            <li><i className="fas fa-phone"></i> +251 911 234 567</li>
                            <li><i className="fas fa-envelope"></i> support@animalhealth.et</li>
                            <li><i className="fas fa-map-marker-alt"></i> Addis Ababa, Ethiopia</li>
                        </ul>
                    </div>
                </div>

                <div className={style.footerBottom}>
                    <p>© 2025 Animal Health Advisory System. All Rights Reserved.</p>
                    <div className={style.footerLegal}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
