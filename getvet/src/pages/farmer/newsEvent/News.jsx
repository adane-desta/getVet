import FarmerHeader from "../farmerDasboard/farmerNav/fheader";
import styles from "./News.module.css";

function News() {
  return (
    <>
      <FarmerHeader />

      <header className={styles.header}>
        <h1>News And Events</h1>
        <p>Animal Health News</p>
      </header>

      <section
        id="news_section"
        className={styles.newsSection}
      ></section>

    </>
  );
}

export default News;
