import { About } from "@/src/components/About";
import { Features } from "@/src/components/Features";
import { Hero } from "@/src/components/Hero";
import { HowItWorks } from "@/src/components/HowItWorks";
import { Security } from "@/src/components/Security";
import { WhoItsFor } from "@/src/components/WhoItsFor";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Features />
            <WhoItsFor />
            <HowItWorks />
            <Security />
        </>
    );
};

export default Home;