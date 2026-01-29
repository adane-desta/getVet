
import styles 

function ResourceItem({resources}) {

    return(
        <>
         <section id="resource_section" className={styles.ResourcesSection}>

            { resources.map( (resource , index) => (

                <div className="resourceItem withImage">
                <img src={image} alt={alt} />
                <div className="resourceContent">
                <div className="resourceCadge">{badge}</div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p className="resourceDate">{date}</p>
                <a href={actual_resourse_url} className="btn" target='_blank'>Watch/Read</a>
                </div>

                </div>
                
             ))}
         </section>
        </>
    )
}

export default ResourceItem;