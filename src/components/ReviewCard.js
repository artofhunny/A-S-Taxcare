import { useEffect, useState } from "react";

const ReviewCard = ({clientData, percent, index}) => {

    // console.log(percent);

    
    const green = index % 2;

    return (
        <div 
            style={{transform: `translateX(${percent}%)`}}
            className={`lg:w-72 lg:h-72 min-w-72 min-h-72 p-4 rounded-lg bg-gradient-to-br  `}>
            <div className={`h-full border border-solid rounded-lg p-4 flex flex-col justify-between  shadow-2xl ${!green? "border-gray-400 bg-emerald-50" : "border-gray-400 bg-white"}`}>
                <div className="flex justify-between">
                    <span class="material-symbols-outlined rotate-180 inline-block lg:text-3xl">
                        format_quote
                    </span>
                    <div className="flex items-center">
                        <p className="lg:text-3xl">4.7</p>
                        <span class="material-symbols-outlined inline-block lg:text-3xl">
                            star
                        </span>
                    </div>
                </div>
                <div>
                    <p className="font-bold lg:text-xl text-emerald-800">{clientData.title}</p>
                    <p className="italic mt-2 text-sm opacity-85">{clientData.review}</p>
                </div>
                <div className="text-end">
                    <p className="font-bold">{clientData.name}</p>
                </div>
            </div>
        </div>
    );
}
export default ReviewCard;