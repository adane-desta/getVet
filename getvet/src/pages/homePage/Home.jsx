
import { useState} from 'react';
import style from './Home.module.css'    
import translations from '../../utils/translations';

function Home() {

    const [lang , setLang] = useState('en')

    const content = translations[lang]


    return (
        <div>
            <header>
                <h1>{content.title}</h1>
                <p>{content.subtitle}</p>

                <div className={style.languageSelector}>
                    <select onChange={(event) => {

                        setLang(event.target.value)

                    }}>
                        <option value="en">English</option>
                        <option value="am">አማርኛ</option>
                        <option value="or">Afaan Oromoo</option>
                    </select>
                </div>

            </header>

            <section className={style.features}>
                {
                    content.features.map((feature , index) => (
                        <div className ={style.featureCard} key={index}>

                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>

                        </div>
                        
                    ))
                }
            </section>

            <div className={style.buttons}>
                <a href="/frontEnd/html-files/loginpage.html">{content.login}</a>
                <a href="/join-us.html">{content.joinUs}</a>
            </div>

            <footer>
                <p>&copy; {new Date().getFullYear()} { content.footer}</p>
            </footer>

        </div>
    )

}

export default Home;