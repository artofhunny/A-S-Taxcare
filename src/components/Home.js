import { useEffect, useState } from "react";
import Header from "../Header";
import Services from "./Services";
import AboutCard from "./AboutCard";
import WhyUs from "./WhyUs";
import Reviews from "./Reviews.";
import Subscribe from "./Subscribe";
import PopUpForm from "./PopUpForm";
import AchievementsSection from "./AchievementsSection";
import Faq from "./Faq";
import { allServices, faqs } from "../utils/constants";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

const Home = () => {

    const [showMessageUs, setShowMessageUs] = useState(false);
    const [IsLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [location.pathname]);


    const handleShowMessageUs = () => {
        setShowMessageUs(!showMessageUs);
    }

    // console.log(allServices);

    return IsLoading? <Loading /> : (
        <section>
            <Header />
            <div className="lg:h-[100vh] h-[60vh] md:h-[50vh] relative">
                <img 
                    // style={{transform: "rotateX(10%)"}}
                    className="w-full h-full lne z-0 object-cover" src="https://images.pexels.com/photos/4476375/pexels-photo-4476375.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="w-full lg:h-[100vh] px-2 h-[60vh] md:h-[50vh] lg:pl-10 lg:pt-10 md:pl-5 lg:block flex items-center  absolute top-0 z-20 md:bg-gradient-to-r bg-gradient-to-l from-slate-100 md:from-slate-200">
                    <div className="">
                        <div className="flex flex-col gap-2 items-start">
                            <p className="bg-gradient-to-r opacity-70 shadow text-center from-emerald-300 to-emerald-50 px-4 border border-solid py-1 border-emerald-400 rounded-3xl ">Empowering Your Business to Reach New Heights</p>
                            <p className="font-bold uppercase text-xl text-center md:text-left md:text-4xl lg:text-5xl text-emerald-800 !leading-tight">
                                Achieve Financial Clarity<br className="hidden md:block" /> with Professional Tax <br className="hidden md:block" /> Consulting Services
                            </p>
                            <button
                             className="lg:text-2xl self-center text-lg md:self-start px-3 lg:px-4 text-center lg:py-2 md:text-xl md:px-3 md:py-1 rounded-lg shadow-xl bg-yellow-400" 
                             onClick={handleShowMessageUs}>
                                Avail Free Consultant
                            </button>
                        </div>

                        <div className="pt-16 flex flex-col md:block items-center gap-3">
                            <button className="lg:text-xl duration-300 md:text-lg text-xl px-1 hover:bg-emerald-900 hover:border-emerald-900 hover:text-white font-bold md:px-3 md:py-2 border border-2 border-emerald-900 text-emerald-900 md:mr-3 rounded-md  inline-block">GST Registration</button>
                            <button className="lg:text-xl duration-300 md:text-lg text-xl px-1 hover:bg-emerald-900 hover:border-emerald-900 hover:text-white font-bold md:px-3 md:py-2 border border-2 border-emerald-900 text-emerald-900 md:mr-3 rounded-md  inline-block">ITR Filling</button>
                            <button className="lg:text-xl duration-300 md:text-lg text-xl px-1 hover:bg-emerald-900 hover:border-emerald-900 hover:text-white font-bold md:px-3 md:py-2 border border-2 border-emerald-900 text-emerald-900 md:mr-3 rounded-md  inline-block">TDS Return Filling</button>
                        </div>
                    </div>
                </div>
            </div>

            <Services showForm={() =>  setShowMessageUs(!showMessageUs)} />
            <AboutCard />
            <WhyUs />
            <Reviews />
            <AchievementsSection />
            <Faq style={"md:text-2xl"} faq={faqs} />
            <Subscribe />

            

            
            
            {showMessageUs && <PopUpForm toggleShow={() => setShowMessageUs(!showMessageUs)} />}

            
            <Footer />

        </section>
    );
}

export default Home;