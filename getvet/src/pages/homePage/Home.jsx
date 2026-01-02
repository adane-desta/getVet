
import Footer from '../../components/Footer/Footer';
import Cta from '../../components/homeCmpos/cta/Cta';
import Features from '../../components/homeCmpos/features/Features';
import Hero from '../../components/homeCmpos/hero/Hero';
import HowItWorks from '../../components/homeCmpos/howItWorks/HowItWorks';
import Testimonials from '../../components/homeCmpos/testimonials/Testimonials';
import MobileMenu from '../../components/mobileMenu/MobileMenu';
import Navbar from '../../components/navBar/Navbar';
import './Home.module.css';
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