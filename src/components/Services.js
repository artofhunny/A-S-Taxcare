import { servicesData } from "../utils/constants";
import ServiceCard from "./ServiceCard";

const Services = ({showForm}) => {
    return (
        <section className="lg:px-10 px-2 lg:py-14 py-8 bg-gray-50">
            <div className="flex flex-col gap-1 items-start md:border-l-4 lg:pl-5 lg:pb-4 border-solid border-emerald-950 font text-slate-950">
                <h1 className="lg:text-6xl text-emerald-950 ">Services</h1>
                <p className="">
                    What We Deliver to Our Clients
                </p>
            </div>

            <div className="py-10 flex duration-500 flex-wrap justify-center lg:justify-between gap-5">
                {servicesData.map((data, i) => {
                    return <ServiceCard key={i + "#"} showForm={showForm} serviceData={data} />
                })}
            </div>


        </section>
    );
}

export default Services;