const ServiceCard = ({serviceData, showForm}) => {
    return (
        <div className="bg-white hover:bg-gradient-to-br from-emerald-950 to-emerald-600 group  lg:w-64 md:w-60 w-56 rounded-lg border px-4 md:px-6 lg:px-8 py-3 border-solid border-gray-400 shadow-lg shadow-emerald-50 gap-3 inline-flex flex-col items-center">
            <div className="flex flex-col gap-2 items-center h-56 bg-emerald-30 border-b border-solid border-gray-400">
                <img className="w-16 h-16 rounded-full" src={serviceData.img} alt="" />
                <p className="italic text-center group-hover:text-white text-emerald-800 font-bold text-lg">{serviceData.service}</p>
                <p className="text-center group-hover:text-yellow-300 text-sm opacity-80">{serviceData.desc}</p>
            </div>
            <button 
                onClick={() => showForm()}
                className="px-4 py-1 rounded bg-amber-500 text-white">
                Enquire    
            </button>            
        </div>
    );
}

export default ServiceCard;