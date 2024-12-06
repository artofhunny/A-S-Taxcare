import Header from "../Header";
import Footer from "./Footer";
import FormBox from "./FormBox";
import PopUpForm from "./PopUpForm";

const ContactUs = () => {
    return (
        <section>
            <Header />
            <div
                style={{backgroundImage: "url('https://images.pexels.com/photos/6863333/pexels-photo-6863333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}} 
                className="w-full h-[90vh] bg-cover bg-no-repeat">
                <div className="flex justify-center items-center h-full bg-opacity-75 bg-gray-900 ">
                    <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-white">
                        Contact Us
                    </h1>

                </div>
            </div>

            <div className="flex items-center justify-center md:gap-20 md:px-8 py-12 bg-emerald-100 lg:px-10">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--customer-support-service-representative-call-pack-business-illustrations-5059493.png?f=webp" alt="" />
                <FormBox />
            </div>

            <Footer style={"bg-gray-200"} />
        </section>
    );
}

export default ContactUs;