
import Footer from '../../components/Footer/Footer.jsx';
import Cta from '../../components/homeCmpos/cta/Cta.jsx';
import Features from '../../components/homeCmpos/features/Features.jsx';
import Hero from '../../components/homeCmpos/hero/Hero.jsx';
import HowItWorks from '../../components/homeCmpos/howItWorks/HowItWorks.jsx';
import Testimonials from '../../components/homeCmpos/testimonials/Testimonials.jsx';
import MobileMenu from '../../components/mobileMenu/MobileMenu.jsx';
import Navbar from '../../components/navBar/Navbar.jsx';
import './Landing.module.css';
import useMobileMenu from '../../hooks/useMobileMenu.js'
function Home(){

    const {open , toggleMenu} = useMobileMenu()

    return(
        <div className="container">
            <MobileMenu open = {open} toggleMenu = {toggleMenu}/>
            <Navbar open = {open} toggleMenu = {toggleMenu} />
            <Hero />
            <HowItWorks />
            <Features />
            <Testimonials />
            <Cta />
            <Footer />
        </div>
    )
}

export default Home;