import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import styles from './fheader.module.css'
import { Link } from "react-router-dom";

const translations = {
    en: {
        home: "Home",
        about: "About",
        news: "News & Events",
        resources: "Resources",
        consultVet: "Consult Vet",
        joinUs: "Join Us",
        chatbot: "Chatbot",
        chooseLanguage: "Choose Language: "
    },
    am: {
        home: "መነሻ ገጽ",
        about: "ስለእኛ",
        news: "ተዛማጅ ክስተቶች",
        resources: "የመረጃ ምንጮች",
        consultVet: "የባለሙያ ምክር ያግኙ",
        joinUs: "እኛን ይቀላቀሉን",
        chatbot: "ቻትቦት",
        chooseLanguage: "ቋንቋ ይምረጡ: "
    },
    or: {
        home: "fuula dura",
        about: "waa'ee keenya",
        news: "oduu haaraa",
        resources: "Qabeenya fayyaa",
        consultVet: "Dooktor waliin mari'achuu",
        joinUs: "Nuti waliin hidhadhu",
        chatbot: "Chatbot",
        chooseLanguage: "Afaan Filadhu: "
    }
};

function FarmerHeader() {
    const [language, setLanguage] = useState(() => {
        const storedLanguage = localStorage.getItem('language');
        return storedLanguage in translations ? storedLanguage : 'en';
    });

    const translation = translations[language] || translations.en; 
    const { home, about, news, resources, consultVet, joinUs, chatbot, chooseLanguage } = translation;

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

    return (
        <nav className={styles.nav}>
            <div className={styles.languageToggle}>
                <label htmlFor="language">{chooseLanguage}</label>
                <select
                    id="language"
                    name="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="en">English</option>
                    <option value="am">Amharic</option>
                    <option value="or">Afaan Oromo</option>
                </select>
            </div>
            <ul>
                <li> <Link id="mine" to={'/farmerHome'}>{home}</Link></li>
                <li><Link id="odoo" to={'/news'}>{news}</Link></li>
                <li><Link id="bue" to={'/resource'}>{resources}</Link></li>
                <li><Link id="sejo" to={'/consultVet'}>{consultVet}</Link></li>
                
                
            </ul>
        </nav>
    );
}

export default FarmerHeader;
