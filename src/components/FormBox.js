import { useRef, useState } from "react";
import { allServices } from "../utils/constants";
import userEvent from "@testing-library/user-event";
import validation from "../utils/formValidation";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

const FormBox = ({reference}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };

      const [errorMessage, setErrorMessage] = useState(null);
      const name = useRef(null);
      const email = useRef(null);
      const city = useRef(null);
      const number = useRef(null);
      const option = useRef(null);

      const handleFormSubmit = () => {
        const message = validation(
          name.current.value,
          email.current.value,
          number.current.value,
          option.current.value,
          city.current.value
        );

        setErrorMessage(message);

        if (message === "Your form has been submitted") {
          // Send the email via EmailJS
          const formData = {
            name: name.current.value,
            email: email.current.value,
            number: number.current.value,
            city: city.current.value,
            service: option.current.value,
          };
    
          emailjs
            .send(
              "service_brgypah", // Replace with your Service ID
              "template_dub17mg", // Replace with your Template ID
              formData,           // Form data object
              "PjK0UxiAHti-odhFJ"      // Replace with your User ID
            )
            .then(
              (response) => {
                console.log("Email sent successfully:", response);
                setErrorMessage("Your form has been submitted");
              },
              (error) => {
                console.log("Failed to send email:", error);
                setErrorMessage("Error sending form data. Please try again.");
              }
            );
        }

        if(message === "Your form has been submitted") {
          name.current.value = null;
          email.current.value = null;
          number.current.value = null;
          city.current.value = null
          option.current.value = "Select Service";
        }

        
      }

    return (
        <div ref={reference} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-4xl text-emerald-800 font-bold mb-4">Free Consultation</h2>
        <h3 className=" my-6">Get your FREE Consultation today! Simply provide your details, and we'll contact you shortly!</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border placeholder:text-gray-700 border-gray-500 rounded-md"
              required
              placeholder="Name"
              ref={name}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="mt-1 p-2 w-full border border-gray-500 placeholder:text-gray-700 rounded-md"
              required
              ref={email}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Mobile Number"
              className="mt-1 p-2 w-full border placeholder:text-gray-700 border-gray-500 rounded-md"
              required
              ref={number}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              className="mt-1 p-2 w-full border placeholder:text-gray-700 border-gray-500 rounded-md"
              required
              ref={city}
            />
          </div>
          <div className="mb-4">
            <select
              id="service"
              name="service"
              className="mt-1 text-black p-2 w-full border border-gray-500 rounded-md"
              required
              ref={option}
            >
              <option value="Select Service">Select Service</option>
              {allServices.map(ele => {
                return <option value={ele}>{ele}</option>
              })}
              <option value="Other">Other</option>
            </select>
          </div>
          {errorMessage && <p className={`${errorMessage !== "Your form has been submitted"? "bg-red-700" : "bg-green-800"} text-white text-center mb-2`}>{errorMessage}</p>}
          {/* {errorMessage && <p className="bg-emerald-800 text-white text-center mb-2 ">{errorMessage}</p>} */}
          <button
            type="submit"
            className="w-full py-2 bg-emerald-900 text-white font-semibold rounded-md"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
}

export default FormBox;