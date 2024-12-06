import { useRef, useState } from "react";
import { allServices } from "../utils/constants";
import validation from "../utils/formValidation";

const QueryForm = ({sticky = "", self = "self-center", bg = false}) => {

    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const number = useRef(null);
    const city = useRef(null);
    const option = useRef(null);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const message = validation(
          name.current.value,
          email.current.value,
          number.current.value,
          option.current.value,
          city.current.value
        );

        if(message === "Your form has been submitted") {
          name.current.value = null;
          email.current.value = null;
          number.current.value = null;
          city.current.value = null
          option.current.value = "Select Service";
        }

        setErrorMessage(message);

        
      }


    return (
        <form className={sticky +  ` top-24 ml-3 md:ml-0 p-5 rounded-lg -mt-10 self-start md:${self} md:mt-0 md:p-6 ${bg? "bg-emerald-900" : "bg-gradient-to-b"} inline-flex text-white flex-col gap-4 from-[#1943277c] to-[#39a05bc6] `}>
            <h1 className="text-2xl font-bold text-center">Get a quote</h1>
            <div className="flex flex-col">
                <input
                     type="text" 
                     placeholder="Enter name"
                     className="outline-none border-2 placeholder:text-gray-600 text-black px-6 py-2 border-solid border-emerald-800 rounded-lg"
                     id="name" 
                     ref={name}
                     required
                />
            </div>
            <div className="flex flex-col">
                <input
                     type="text" 
                     placeholder="Enter number"
                     className="outline-none border-2 placeholder:text-gray-600 text-black px-6 py-2 border-solid border-emerald-800 rounded-lg"
                     id="number"
                     ref={number}
                     required
                />
            </div>
            <div className="flex flex-col">
                <input
                     type="email" 
                     placeholder="Enter email"
                     className="outline-none border-2 placeholder:text-gray-600 text-black px-6 py-2 border-solid border-emerald-800 rounded-lg"
                     id="email"
                     ref={email}
                     required
                />
            </div>

            <div className="flex flex-col">
                <input
                     type="text" 
                     placeholder="Enter city"
                     className="outline-none border-2 placeholder:text-gray-600 text-black px-6 py-2 border-solid border-emerald-800 rounded-lg"
                     id="city"
                     ref={city}
                     required
                />
            </div>

            <select 
                ref={option}
                required
                className="text-black px-6 py-2 opacity-90 rounded-lg" id="">
                <option value="Select Service" selected>Select Service</option>
                {allServices.map(ele => {
                return <option value={ele}>{ele}</option>
              })}
                <option value="Other">Other</option>
            </select>

            {errorMessage && <p className={`${errorMessage !== "Your form has been submitted"? "bg-red-700" : "bg-green-800"} text-white text-center mb-2`}>{errorMessage}</p>}

            <button 
                className="bg-yellow-500 py-2 text-black font-bold rounded-lg"
                onClick={handleFormSubmit}
            >Submit</button>

        </form>
    );
}

export default QueryForm;