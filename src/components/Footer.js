import { useEffect } from "react";
import headerData from "../utils/constants";
import { Link } from "react-router-dom";

const Footer = ({style = "bg-emerald-100"}) => {
    // console.log(headerData.name["Company Formation"]);

    useEffect(() => {
        headerData.map(data => {
            if(data.name === "Company Formation"){
                data.subLists.map((subData, i) => {
                    // return <li key={i} >{subData.name}</li>
                    console.log(subData.name);
                    
                })
            }
        })
    }, []);
    
    return (
        <footer className={`flex lg:px-24 px-3 md:px-16 gap-8 md:gap-0 py-10 flex-wrap md:flex-nowrap justify-between ${style}`}>
            <div className="">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, a!</p>
                <div>
                    <p>
                        <span>Email: </span>
                        A&S@DummyMail.com
                    </p>
                    <p>
                        <span>Phone: </span>
                        686867XXXXX
                    </p>
                    <p>
                        <span>Hours:</span>
                        Mon-Fri 10:00AM - 6:00PM
                    </p>
                </div>
            </div>

            <div className="flex gap-5 md:gap-10 flex-wrap md:flex-nowrap">
                <div className="flex gap-6">
                    <div>
                        <h1 className="md:text-xl text-lg mb-5 md:mb-8 font-bold">Our Services</h1>
                        <ul>
                            {headerData.map(data => {
                                if(data.name === "Company Formation"){
                                    return data.subLists.map((subData, i) => {
                                        return <Link to={`/service/${subData.id}`}>
                                            <li key={i}
                                                        className="mb-5 text-sm md:text-base underline-offset-8 underline cursor-pointer"
                                            >{subData.name}</li>
                                        </Link>
                                    })
                                }
                            })}
                        </ul>
                    </div>

                    <div>
                        <h1 className="md:text-2xl text-lg mb-5 md:mb-8 font-bold">Registration</h1>
                        <ul>
                            {headerData.map(data => {
                                if(data.name === "Registration"){
                                    return data.subLists.map((subData, i) => {
                                        return <Link to={`/service/${subData.id}`}>
                                            <li key={i}
                                                        className="mb-5 text-sm md:text-base underline-offset-8 underline cursor-pointer"
                                            >{subData.name}</li>
                                        </Link>
                                    })
                                }
                            })}
                        </ul>
                    </div>
                </div>

                <div>
                    <p className="md:text-2xl text-lg font-bold">
                        A&S TaxCare
                    </p>
                    <p className="w-56 md:text-base text-sm">
                        A&S TaxCare was founded in 2021 with the goal of offering top-notch management consultancy services tailored for startups and businesses. We focus on delivering efficient, reliable, and affordable solutions to simplify tax compliance and business operations, empowering our clients to concentrate on their core objectives.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;