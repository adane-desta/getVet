
import style from './Home.module.css'
function Home() {

    return (
        <div>
            <header>
                <h1>Welcome to the Animal Health Advisory System</h1>
                <p>Your trusted platform for better animal health and care</p>

                <div className={style.languageSelector}>
                    <select id="language-selector">
                        <option value="en">English</option>
                        <option value="am">አማርኛ</option>
                        <option value="or">Afaan Oromoo</option>
                    </select>
                </div>

            </header>

            <section className={style.features}>
                <div className={style.featureCard}>
                    <h3>For Farmers</h3>
                    <p>Get expert advice to keep your livestock healthy and productive.</p>
                </div>
                <div className={style.featureCard}>
                    <h3>For Veterinarians</h3>
                    <p>Collaborate with farmers and share your expertise to improve animal care.</p>
                </div>
                <div className={style.featureCard}>
                    <h3>Resources</h3>
                    <p>Access a wealth of knowledge, articles, and guides tailored to animal health.</p>
                </div>
                <div className={style.featureCard}>
                    <h3>Appointments</h3>
                    <p>Schedule and manage appointments efficiently through our platform.</p>
                </div>
                <div className={style.featureCard}>
                    <h3>News and Updates</h3>
                    <p>Stay informed with the latest trends and news in animal health.</p>
                </div>
                <div className={style.featureCard}>
                    <h3>Ask Questions</h3>
                    <p>Post your questions and get answers from veterinary experts.</p>
                </div>
            </section>

            <div className={style.buttons}>
                <a href="/frontEnd/html-files/loginpage.html">Login</a>
                <a href="/join-us.html">Join Us</a>
            </div>

            <footer>
                <p>&copy; 2025 Animal Health Advisory System. All Rights Reserved.</p>
            </footer>

        </div>
    )

}

export default Home;