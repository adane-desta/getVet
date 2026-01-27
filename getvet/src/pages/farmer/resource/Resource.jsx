import FarmerHeader from "../farmerDasboard/farmerNav/fheader";
import styles from "./Resource.module.css";

function ResourcePage() {
  return (
    <>
      <FarmerHeader />

      <header className={styles.header}>
        <h1>Animal Health resource</h1>
        <p>disease protection And Prevention</p>
      </header>

      <section id="resource_section" className={styles.ResourcesSection}>
        {/* Resource items will be injected dynamically */}
      </section>

      <div id="chatbotContainer"></div>
      <div id="footer"></div>
    </>
  );
}

export default ResourcePage;
