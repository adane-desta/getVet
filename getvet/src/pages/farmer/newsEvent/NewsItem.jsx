
import styles from "./News.module.css";


function NewsItem({newsEvent}) {

    return (
        <>
            <section className={styles.newsSection}>
                {newsEvent.map( (newsevent , index) => (

                    <div key={index} className={`${styles.newsItem} ${styles.withImage}`}>
                    <img src={newsevent.image_url} alt={newsevent.title} />
                    <div className= {styles.newsContent}>
                        <div className={styles.newsBadge}>{newsevent.type}</div>
                        <h2>{newsevent.title}</h2>
                        <p>{newsevent.description}</p>
                        <span className={styles.newsDate}>{newsevent.date}</span>
                    </div>
                </div>
                ))}

            </section>
        </>
    )

}
export default NewsItem;