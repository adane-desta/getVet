import styles from './Features.module.css';

function Features() {

    const features = [

        {
            title: "For Farmers",
            description: "Expert advice to keep your livestock healthy, productive and profitable.",
            items: [
                 "Disease Prevention",
                 "Nutrition Guidance",
                 "Emergency Support",
            ]
            
        },
        {
            title: "For Veterinarians",
            description: "Expand your practice with digital consultations and professional networking.",
            items: [
                "Digital Consultations",
                "Case Management",
                "Professional Networ",
            ]

        },
        {
            title: "Smart Appointments",
            description: "Schedule, manage and track appointments with our intelligent booking system.",
            items: [
                 "Online Booking",
                 "Automatic Reminders",
                 "Visit History",
            ]
           
        },
        {
            title: "For Farmers",
            description: "Expert advice to keep your livestock healthy, productive and profitable.",
            items: [
                "Disease Prevention",
                "Nutrition Guidance",
                "Emergency Support",
            ]
     
        },
        {
            title: "For Farmers",
            description: "Expert advice to keep your livestock healthy, productive and profitable.",
            items: [
                "Disease Prevention",
                "Nutrition Guidance",
                "Emergency Support",   
            ]
     
        },
        {
          title: "Health Resources",
          description: "Access articles, guides and treatment protocols for common animal conditions.",
          items: [
            "Treatment Guides",
            "Preventive Care",
            "Best Practices"
          ]
        },
        {
          title: "Disease Alerts",
          description: "Get notified about disease outbreaks in your region with preventive recommendations.",
          items: [
            "Outbreak Alerts",
            "Preventive Measures",
            "Regional Updates"
          ]
        },
        {
          title: "Expert Q&A",
          description: "Ask questions and get answers from veterinary experts within hours.",
          items: [
            "Quick Responses",
            "Verified Experts",
            "Community Support"
          ]
        }
      ];
      
  return (
    <div>
      {/* Features */}
      <section className={styles.features} id="features">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Everything You Need for <span className={styles.highlight}>Animal Health</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive tools for farmers and veterinarians
          </p>
        </div>

        <div className={styles.featuresGrid}>
            {features.map((feature , index) => (
                <div key={index} className={styles.featureCard}>
                    <div className={styles.featureIcon}>
                    <i className="fas fa-tractor"></i>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>
                    {feature.description}
                    </p>
                    <ul className={styles.featureList}>
                    {feature.items.map((item , i) => (
                        <li key={i} ><i className="fas fa-check"></i>{item}</li>
                    ))}
                    </ul> 

                </div>

            ))}


        </div>
      </section>
    </div>
  );
}

export default Features;