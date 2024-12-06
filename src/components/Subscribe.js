// import { addDoc, collection } from "firebase/firestore/lite";
import { useRef, useState } from "react";
// import { db } from "../utils/firebase";

const Subscribe  = () => {

    const emailRef = useRef(null);
    const [message, setMessage] = useState(null);

    const handleSubscribe = async () => {
        // Validating the email

        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailRef.current.value)){
            setMessage("Enter valid email");
            return;
        }

        const email = emailRef.current.value;

        // try {
        //     await addDoc(collection(db, "subscribers"), { emailVal });
        //     setMessage("Thank you for subscribing!");
        //   } catch (error) {
        //     console.error("Error saving email:", error);
        //     setMessage("Error subscribing. Please try again.");
        //   }

        // try {
        //     await addDoc(collection(db, "subscribers"), { email });
        //     setMessage("Thank you for subscribing!");
        //   } catch (error) {
        //     console.error("Error saving email:", error);
        //     setMessage("Error subscribing. Please try again.");
        //   }

        // try {
        //     await db.collection("subscribers").add({
        //       email: emailVal,
        //     });
        //     console.log("Email added to Firestore!");
        //   } catch (error) {
        //     console.error("Error saving email:", error);
        //   }
        
    }

    return (
        <section className="flex flex-col px-3 md:px-10 items-center py-24 md:py-32 bg-gradient-to-r to-emerald-700 from-emerald-950">
            <p className="px-5 py-2 mb-4 rounded-lg bg-emerald-700 text-white">Stay up to date</p>
            <h1 className="text-3xl text-center md:text-5xl font-bold text-white mb-10">
                Keep up with the latest trends and updates
            </h1>
            <div className="flex rounded-lg overflow-hidden border md:border-2 border-solid border-white">
                <input 
                    ref={emailRef}
                    placeholder="Enter Email Address"
                    className="w-60 md:w-80 px-3 md:px-5 py-2 md:py-3 bg-yellow-50 border-r-2 border-solid border-white text-lg md:text-2xl"
                    type="text" />
                <button
                    onClick={handleSubscribe}
                    className="text-lg md:text-2xl bg-emerald-900 hover:border-2 hover:bg-white rounded-lg  border-solid border-emerald-950 hover:text-emerald-900 text-white px-2 lg:px-4">Subscribe</button>
            </div>
            {message && 
                <p
                    className="bg-red-700 px-6 text-white mt-3"
                >{message}</p>}
        </section>
    );
}

export default Subscribe;


// 4MN1ZZZZNAUHULQKXA7DDBFL


// 7d1b71d7a1a6581e557b367e0efbff18-us7