import FarmerHeader from "../farmerDasboard/farmerNav/fheader";
import styles from "./ConsultVeternerian.module.css";

function ConsultVet() {
  return (
    <>

     <FarmerHeader />

      <header className={styles.header}>
        <h1 id="innertitle">
          Get Professional Advice From Expert Veterinarians
        </h1>
        <p id="innertitle2">
          Your trusted platform for expert veterinary guidance, designed for
          farmers and animal lovers alike.
        </p>
      </header>

      <header className={styles.header2}>
        <h1>Expert veterinary advice for farmers and pet owners.</h1>
        <p>Trusted guidance to keep animals healthy and thriving.
        </p>
      </header>

      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <h2>How It Works</h2>
          <p>
            Our system is designed to provide you with a seamless experience
            when booking a consultation with our expert veterinarians. Whether
            you’re a farmer seeking advice for your livestock or a pet owner
            looking for care, follow these simple steps:
          </p>

          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <h3>Choose a Veterinarian</h3>
              <p>
                Browse the list of veterinarians below, and learn about their
                expertise and experience. Select the one that best suits your
                needs.
              </p>
            </div>

            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <h3>Book Your Appointment</h3>
              <p>
                Click the <strong>"Book Appointment"</strong> button under the
                veterinarian&apos;s profile. A pop-up will appear where you can
                choose a date and time slot for your consultation.
              </p>
            </div>

            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <h3>Confirm Your Booking</h3>
              <p>
                Submit your details, and you&apos;ll receive a confirmation
                message with all the appointment information. Rest assured that
                your booking is secured.
              </p>
            </div>

            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <h3>Stay Notified</h3>
              <p>
                Get notified via email or SMS about the status of your
                appointment. Receive reminders and updates so you never miss a
                consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.doctorsSection}>
        <h2>Meet Our Expert Veterinarians</h2>

        <div className={styles.doctorsContainer}>
          <div className={styles.doctorCard}>
            <img src="https://via.placeholder.com/150" alt="Dr. Yared Adise" />
            <h3>Dr. Yared Adise</h3>
            <p>
              Dr. Yared is a leading veterinarian specializing in livestock
              health with over 15 years of experience in treating cattle,
              poultry, and sheep.
            </p>
            <button onClick={() => window.showAppointmentsModal(5)}>
              Book Appointment
            </button>
          </div>

          <div className={styles.doctorCard}>
            <img src="https://via.placeholder.com/150" alt="Dr. Thomas d." />
            <h3>Dr. Thomas d.</h3>
            <p>
              Dr. Thomas is passionate about small animal care and has expertise
              in canine and feline diseases. She has helped hundreds of pets
              recover from critical illnesses.
            </p>
            <button onClick={() => window.showAppointmentsModal(7)}>
              Book Appointment
            </button>
          </div>

          <div className={styles.doctorCard}>
            <img src="https://via.placeholder.com/150" alt="Dr. Adane Desta" />
            <h3>Dr. Adane Desta</h3>
            <p>
              With a strong background in wildlife medicine, Dr. Adane has spent
              years rehabilitating injured wild animals and guiding farmers on
              sustainable practices.
            </p>
            <button onClick={() => window.showAppointmentsModal(6)}>
              Book Appointment
            </button>
          </div>

          <div className={styles.doctorCard}>
            <img src="https://via.placeholder.com/150" alt="Dr. Bole Desta" />
            <h3>Dr. Bole Desta</h3>
            <p>
              Dr. Bole specializes in dairy farming and provides guidance on
              improving milk production and preventing common diseases in
              cattle.
            </p>
            <button onClick={() => window.showAppointmentsModal(8)}>
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div id="modal" className={styles.modal}>
        <div className={styles.modalContent}>
          <span id="vet_id"></span>
          <h2>Add Appointment</h2>

          <form id="modal-form">
            <input type="text" id="modal_vet_id" style={{ display: "none" }} />
            <input type="date" id="appointment-date" required />
            <input type="time" id="appointment-time" required />
            <input
              type="text"
              id="appointment-reason"
              placeholder="Appointment reason"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div id="chatbotContainer"></div>
      <div id="footer"></div>
    </>
  );
}

export default ConsultVet;
