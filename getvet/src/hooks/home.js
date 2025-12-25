

function useTranslatION(){


    
    
        const selectedLang = event.target.value;
        const content = translations[selectedLang];
    
        document.querySelector("header h1").textContent = content.title;
        document.querySelector("header p").textContent = content.subtitle;
    
        const features = document.querySelectorAll(".feature-card");
        content.features.forEach((feature, index) => {
            features[index].querySelector("h3").textContent = feature.title;
            features[index].querySelector("p").textContent = feature.description;
        });
    
        const buttons = document.querySelector(".buttons").children;
        buttons[0].textContent = content.login;
        buttons[1].textContent = content.joinUs;
    
        document.querySelector("footer p").innerHTML = content.footer;


}

export default translate