
import Footer from '../../components/Footer/Footer';
import Cta from '../../components/homeCmpos/cta/Cta';
import Features from '../../components/homeCmpos/features/Features';
import Hero from '../../components/homeCmpos/hero/Hero';
import HowItWorks from '../../components/homeCmpos/howItWorks/HowItWorks';
import Testimonials from '../../components/homeCmpos/testimonials/Testimonials';
import Navbar from '../../components/navBar/Navbar'
function Home(){

    return(
        <div>

            <Navbar />
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