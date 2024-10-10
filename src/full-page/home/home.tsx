import Hero from "@/src/components/hero/Hero";
import Features from "@/src/components/features/Features";
import Testimonials from "@/src/components/testimonials/Testimonials";
import CTA from "@/src/components/cta/CTA";
import Newsletter from "@/src/components/newsletter/Newsletter";

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Features />
            <Testimonials />
            <CTA />
            <Newsletter />
        </>
    );
};

export default Home;
