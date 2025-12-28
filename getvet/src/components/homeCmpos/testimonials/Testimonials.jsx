import styles from "./Testimonials.module.css";

 function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <h2>What Our Users Say</h2>

      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          This platform transformed my farm completely.
        </p>
        <div className={styles.authorInfo}>
          <h4>Kebede Mulugeta</h4>
          <p>Dairy Farmer</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;