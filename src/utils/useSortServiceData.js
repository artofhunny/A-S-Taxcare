import { useEffect, useState } from "react"
import { serviceData_api } from "./constants"

const useSortData = (id) => {
    // const AllServiceData = servicesData;
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            // const service = servicesData_API.find((service) => service.id === id);
            setData(null);
           
            setTimeout(() => {
                const service  = serviceData_api.find((service) => service.id === id);
                if (service) {
                    setData(service);
                }
            }, 1000);
        };
        fetchData();
    }, [id]);
    

    return data;

}

export default useSortData;