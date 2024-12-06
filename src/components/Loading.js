import logo from "../utils/A&S TaxCare.png";

const Loading = () => {
    return (
        <div className="flex h-screen bg-emerald-900 justify-center items-center ">
            <img 
                className="w-40"
                src={logo}
                alt="" />
        </div>
    );
}

export default Loading;