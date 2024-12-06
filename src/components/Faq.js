import FaqRybbon from "./FaqRybbon";

const Faq = ({faq, style}) => {
    return (
        <section className="lg:px-10 py-10 flex flex-col gap-3 md:gap-5">
            <h1 className="md:text-3xl text-xl py-2 text-emerald-950 font-bold">Frequently Asked Questions</h1>

            {faq.map(data => {
                return <FaqRybbon style={style} quesAns={data} />
            })}

        </section>
    );
}

export default Faq;