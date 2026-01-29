
import styles from './resource.module.css'

function ResourceItem({resources}) {

    return(
        <>
         <section id="resource_section" className={styles.ResourcesSection}>

            { resources.map( (resource , index) => (

                <div key={index} className={`${styles.resourceItem} ${styles.withImage}`}>
                <img src={resource.image_url} alt={resource.title} />
                <div className={styles.resourceContent}>
                <div className={styles.resourceCadge}>{resource.type}</div>
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
                <p className={styles.resourceDate}>{resource.created_at}</p>
                <a href={resource.actual_resource_url} className={styles.btn} target='_blank'>Watch/Read</a>
                </div>

                </div>
                
             ))}
         </section>
        </>
    )
}

export default ResourceItem;