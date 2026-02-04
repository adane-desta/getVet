import FarmerHeader from "../farmerDasboard/farmerNav/fheader";
import styles from "./News.module.css";
import NewsItem from "./newsItem";
import useNewsEvent from "./useNewsEvent";


function News() {

  const newsEvent = useNewsEvent();
  return (
    <>
      <FarmerHeader />

      <header className={styles.header}>
        <h1>News And Events</h1>
        <p>Animal Health News</p>
      </header>

      <NewsItem newsEvent = {newsEvent}/>
      
      
    </>
  );
}

export default News;
