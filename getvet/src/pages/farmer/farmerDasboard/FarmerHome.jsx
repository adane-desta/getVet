
import styles from './FarmerHome.module.css'

function FarmerHomePage() {
  return (
    <>
      {/* Navigation Bar */}
      <div id="navbar"></div>

      <header className={styles.header}>
        <h1>Professional Advice for Your Animal Health</h1>
        <p>Ensuring the well-being of your livestock with expert guidance</p>
      </header>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>About Us</h2>
              <p>
                We offer reliable resources, veterinary consultations, and
                disease prevention strategies specifically tailored to farmers'
                needs. Our platform connects you with professional expertise to
                ensure your animals thrive, contributing to sustainable farming
                practices.
              </p>
              <a href="#services" className={styles.btn}>
                Learn More
              </a>
            </div>

            <div className={styles.aboutImage}>
              <img
                src="/dbResources/images/farm-animals.jpg.jpg"
                alt="Farm animals"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <h2>Our Services</h2>

          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <img
                src="/dbResources/images/vetdoctor.avif"
                alt="Veterinary Consultation"
              />
              <h3>Veterinary Consultation</h3>
              <p>
                Get professional advice from licensed veterinarians to address
                any health concerns regarding your livestock and pets.
              </p>
              <a href="consult_vet.html" className={styles.btn}>
                Learn More
              </a>
            </div>

            <div className={styles.serviceCard}>
              <img
                src="/dbResources/images/healthResoorce.jpg"
                alt="Animal Health Resources"
              />
              <h3>Health Resources</h3>
              <p>
                Access a wide range of detailed guides, videos, and articles that
                provide the best practices for taking care of your animals.
              </p>
              <a href="resources.html" className={styles.btn}>
                Learn More
              </a>
            </div>

            <div className={styles.serviceCard}>
              <img
                src="/dbResources/images/Animal_Diseases_Icons.png"
                alt="Disease Control"
              />
              <h3>Disease Control</h3>
              <p>
                Learn effective strategies to prevent and control zoonotic
                diseases, ensuring the health of both your animals and your
                family.
              </p>
              <a href="#contact" className={styles.btn}>
                Learn More
              </a>
            </div>

            <div className={styles.serviceCard}>
              <img
                src="/dbResources/images/supportfarmer.png"
                alt="Farmer Support"
              />
              <h3>Farmer Support</h3>
              <p>
                Join a supportive community of farmers and experts for advice,
                resources, and shared experiences to improve your farming
                practices.
              </p>
              <a href="#contact" className={styles.btn}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <h2>Contact Us</h2>

          <form className={styles.contactForm} id="contact-form">
            <input id="name" type="text" placeholder="Your Name" required />
            <input
              id="address"
              type="text"
              placeholder="Your Address"
              required
            />
            <input
              id="email"
              type="email"
              placeholder="Your Email or phone"
              required
            />
            <textarea
              id="question"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
            <button id="sendBtn" type="submit" className={styles.btn}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer + Chatbot */}
      <div id="chatbotContainer"></div>
      <div id="footer"></div>
    </>
  );
}

export default FarmerHomePage;
