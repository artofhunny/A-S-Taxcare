const AboutCard = () => {
    return (
        <section className="bg-emerald-50 py-4 md:py-6">
            <h1 className="text-center lg:text-5xl text-2xl text-emerald-950 font-bold md:font-normal">About A&S TaxCare</h1>
            <div className="flex px-3 lg:px-10 md:gap-9 lg:gap-16 flex-wrap md:flex-nowrap justify-center md:justify-between pt-6  lg:pt-10">
                <img 
                    src="https://cdn.pixabay.com/photo/2021/03/02/17/37/accounting-6063321_1280.png" alt=""
                    className="lg:w-[400px] md:w-[300px] w-[90vw] rounded"
                />
                <div className="">
                        <h2 className="mb-2 md:mb-5 pt-2 font-bold text-3xl md:text-5xl text-emerald-900">
                            Focused on Delivering Excellence in Tax Consultancy
                        </h2>
                        <p className="opacity-80">Welcome to A&S TaxCare, your trusted partner in navigating the complex world of taxes and finances. At A&S TaxCare, we specialize in providing comprehensive, personalized tax and accounting solutions for individuals, businesses, and organizations.</p>
                    <button className="mt-8 lg:mt-16 bg-yellow-400 shadow-lg px-2 py-[2px] my-2 text-lg lg:px-4 lg:py-2 rounded ">Contact Us</button>
                </div>
            </div>
        </section>
    );
}

export default AboutCard;