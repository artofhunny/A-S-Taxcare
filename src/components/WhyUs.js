const WhyUs = () => {
    return (
        <section className="flex flex-col items-center px-3 lg:px-10 pb-14">
            <h1 className="py-10 text-2xl md:text-4xl font-semibold">Why A&S TaxCare</h1>
            <div className="lg:px-10 flex lg:gap-10 justify-center bg-red-5 w-full lg:justify-between items-center flex-wrap">
                <div className="">
                    <div className="mb-2 flex gap-5 flex-wrap-reverse justify-center items-center">

                        <div className=" bg-emerald-800 text-white w-72 h-72 border border-solid rounded border-gray-600 p-4 ">
                            <div className="border border-solid border-gray-400 h-full flex flex-col rounded justify-center gap-3 items-center p-3">
                                <span class="material-symbols-outlined text-6xl">
                                    record_voice_over
                                </span>
                                <div>
                                    <h1 className=" font-bold text-xl mb-2 text-center">Expert Guidance</h1>
                                    <p className="text-sm text-yellow-100 text-justify">Benefit from the expertise of seasoned tax consultants with in-depth knowledge of the latest tax laws and regulations.</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded shadow-lg w-52 h-52 border border-solid border-gray-600 p-4 flex flex-col items-center justify-around">
                            <span class="material-symbols-outlined text-3xl">
                                record_voice_over
                            </span>
                            <div>
                                <h1 className="font-bold text-xl mb-2 text-center">Expert Guidance</h1>
                                <p className="text-xs text-justify">Benefit from the expertise of seasoned tax consultants with in-depth knowledge of the latest tax laws and regulations.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-5 flex-wrap justify-center items-center">
                        <div className="w-52 shadow-lg rounded h-52 border border-solid border-gray-600 p-4 flex flex-col items-center justify-around">
                            <span class="material-symbols-outlined text-3xl">
                                record_voice_over
                            </span>
                            <div>
                                <h1 className="font-bold text-xl mb-2 text-center">Expert Guidance</h1>
                                <p className="text-xs text-justify">Benefit from the expertise of seasoned tax consultants with in-depth knowledge of the latest tax laws and regulations.</p>
                            </div>
                        </div>

                        <div className="bg-emerald-800 text-white w-72 h-72 border border-solid rounded border-gray-600 p-4 ">
                            <div className="border border-solid border-gray-400 h-full flex flex-col rounded justify-center gap-3 items-center p-3">
                                <span class="material-symbols-outlined text-6xl">
                                    record_voice_over
                                </span>
                                <div>
                                    <h1 className=" font-bold text-xl mb-2 text-center">Expert Guidance</h1>
                                    <p className="text-sm text-yellow-100 text-justify">Benefit from the expertise of seasoned tax consultants with in-depth knowledge of the latest tax laws and regulations.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <img className="lne md:w-[450px] lg:w-[500px]" 
                src="https://img.freepik.com/premium-vector/accountants-maintain-financial-records-prepare-tax-returns_701961-4779.jpg?semt=ais_hybrid" alt="" />
            </div>
        </section>
    );
}

export default WhyUs;