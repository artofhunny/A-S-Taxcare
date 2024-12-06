import { useState } from "react";

const FaqRybbon = ({quesAns, style}) => {

    const [showAns, setShowAns] = useState(false);

    const handleShowAns = () => {
        setShowAns(!showAns);
    }

    return (
        <div className="border-2 border-solid border-emerald-900 rounded-lg overflow-hidden">
            <p 
                onClick={handleShowAns}
                className={"bg-emerald-900 flex items-center gap-2 cursor-pointer text-white px-4 py-2 " + style}>
                <span class="material-symbols-outlined">
                    {showAns? "remove" : "add"}
                </span>
                <span>
                    {quesAns.ques}
                </span>
            </p>
            {showAns &&
            <p className="px-4 py-2 "     
                >{quesAns.ans}</p>}
        </div>
    );
}


export default FaqRybbon;