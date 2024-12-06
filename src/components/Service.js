import { useParams } from "react-router-dom";
import useSortData from "../utils/useSortServiceData";
import { servicesData } from "../utils/constants";
import Header from "../Header";
import QueryForm from "./QueryForm";
import AchievementsSection from "./AchievementsSection";
import Faq from "./Faq";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import { useEffect } from "react";
import Loading from "./Loading";

const Service = () => {

    const { id } = useParams();
    // console.log(serviceName.id);


    const sortedData = useSortData(id);
    // console.log(sortedData);
    
    

    return !sortedData? 
        <Loading />
        : 
        (
        <section className="">
            
            <Header />
            
            <div
                className="h-[105vh] md:h-[90vh] w-full bg-cover relative" 
                style={{backgroundImage: "url('https://kdpaccountants.com/assets/images/service/single/12.png')"}}>
                <div className="lg:pr-10 md:pr-8 pr-3  md:gap-20 flex flex-wrap md:flex-nowrap justify-center md:justify-between md:items-center h-[105vh] md:h-[90vh] w-full absolute bg-gradient-to-b from-[#3d3c3cb8] to-[#000000e3]">

                    <div className="lg:pl-10 md:pl-8 pl-3 md:h-full pt-14 md:pt-24 lg:pt-16 md:bg-gradient-to-r from-[#0f301add] flex flex-col justify-cente gap-4 md:gap-10 lg:gap-12">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">{sortedData.name}</h1>
                        <p className="text-white md:text-2xl">{sortedData.slogan}</p>
                    </div>

                    <QueryForm />

                </div>
            </div>

            <div className="flex lg:py-16 py-10 lg:gap-14 gap-12 lg:px-10 md:px-8 items-center justify-center md:flex-nowrap flex-wrap-reverse bg-emerald-50 px-3">
                <img 
                    src="https://img.freepik.com/photos-premium/dessin-anime-megaphone-image-animee-haut-parleur-dans-coin_950428-17600.jpg?semt=ais_hybrid" alt="Why Choose Us imgage"
                    className="w-[360px] drop-shadow-2xl rounded-3xl"
                    />
                <div className="">
                    <h1 className="font-bold text-xl lg:text-3xl mb-4">{sortedData.why.heading}</h1>
                    <p className="text-justify text-sm md:text-base">{sortedData.why.ans}</p>
                    <ul className="mt-6">
                        {sortedData.why.whyBest.map((data, i) => {
                            return <li key={i} className="mb-3 md:mb-6 flex items-center gap-5" >
                                        <span class="material-symbols-outlined font-bold text-yellow-500"> check </span>
                                        <span>{data}</span>
                                    </li>   
                        })}
                    </ul>
                </div>
            </div>


            <section className="flex gap-10 px-3 md:px-8 py-6 lg:px-10 md:py-16">
                <div className="hidden md:block">
                    <QueryForm self="self-start" sticky="sticky"bg={true} />
                </div>

                <div className="flex flex-col items-start">
                    <div className="self-center font-bold px-6 py-6 md:px-16 lg:py-8 border-4 rounded-lg mb-4 border-solid border-yellow-600 gap-3">
                        <h1 className="text-lg opacity-80 lg:text-2xl">{sortedData.what.heading}</h1>
                        <p className="opacity-55"> {sortedData.what.ans}</p>
                    </div>
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold mb-6 text-emerald-950">{sortedData.benefits.heading}</h1>
                        <ul>
                            {sortedData.benefits.points.map((data, i) => {
                                return <li key={i} className="mb-3 md:mb-6 flex items-center gap-5" >
                                            <span class="material-symbols-outlined font-bold text-yellow-500"> check </span>
                                            <span>{data}</span>
                                        </li>   
                            })}
                        </ul>
                    </div>

                    <Faq faq={sortedData.faq.questions} />
                </div>

            </section>
            
            <AchievementsSection />
            <Footer />
            

        </section>
    );
}

export default Service;