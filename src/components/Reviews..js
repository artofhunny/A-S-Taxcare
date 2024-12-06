import { useEffect, useState } from "react";
import { reviewData } from "../utils/constants";
import ReviewCard from "./ReviewCard";

const Reviews = () => {

    const [sliderPercentage, setSliderPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // const newPercentage = sliderPercentage + 1;

            setSliderPercentage((prev) => (prev <= -550? 5 : prev - 1));
            
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-gray-100">
            <div className="py-10 mx-3 lg:mx-10 overflow-x-hidden">
                <h1 className="capitalize text-center text-4xl font-semibold">What client say</h1>
                <div className="flex gap-6 pt-10 ">
                    {reviewData.map((client, i) => {
                        return <ReviewCard key={i+"#"} percent={sliderPercentage} clientData={client} index={i} />
                    })}
                </div>
            </div>
        </section>
    );
}

export default Reviews;