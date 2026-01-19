
import style from "./Features.module.css";
import { features } from "../../../utils/constants";
function Features(){

{/* Features */}
return(
<section className={style.features} id="features">
  <div className={style.sectionHeader}>
    <h2 className={style.sectionTitle}>
      Everything You Need for <span className={style.highlight}>Animal Health</span>
    </h2>
    <p className={style.sectionSubtitle}>Comprehensive tools for farmers and veterinarians</p>
  </div>

  <div className={style.featuresGrid}>

    {features.map((feature , index) => (
          <div key={index} className={style.featureCard}>
          <div className={style.featureIcon}>
            <i className={feature.icon}></i>
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          <ul className={style.featureList}>
            {feature.items.map((item , ind) =>(
              <li key={ind}><i className="fas fa-check"></i>{item}</li>
            ))}
            
          </ul>
        </div>
    ))}

   </div>
</section>
)
}
export default Features;