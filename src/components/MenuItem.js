import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MenuItem = ({itemData, index, activeItem, setActiveItem}) => {

    // const listRef = useRef(null);
    const navigate = useNavigate();

    const subListRef = useRef([]);
    const [liNum, setLiNum] = useState(null);

    const handleRedirect = () => {

        setActiveItem(itemData.id || index);

        if(!itemData.subLists){
            navigate(`/${itemData.id}`);
        }

        console.log(subListRef);
        


        // setNum();
    }

    return (
        
            <li onClick={handleRedirect}
                // ref={(li) => itemRef.current[index] = li}
                // ref={listRef}
                className={`relative cursor-pointer pl-2 md:pl-0 py-2 hover:bg-emerald-700 hover:rounded-lg lg:py-4 group sm:py-1 md:py-2  border-solid border-white ${activeItem === (itemData.id || index) ? "border-b-2" : ""}`}
                >
                <div className="flex text-white lg:px-2 rounded bg-gradient-to- from-emerald-600">
                    <p className="">{itemData.name}</p>
                    {itemData.subLists && <span className="material-symbols-outlined mt-[2px]">
                        stat_minus_1
                    </span>}
                </div>

                {
                    itemData.subLists && 
                    <div className=" absolute hidden z-40 rounded text-white overflow-hidden duration-300 mt-2 group-hover:block bg-gradient-to-b from-emerald-400 to-emerald-700 shadow-2xl shadow-emerald-800">
                        <ul>
                            {
                                itemData.subLists.map((subData, i) => {
                                    return  <Link to={`/service/${subData.id}`}>
                                                <li 
                                                    key={i + "#"}
                                                    onClick={() => setLiNum(i)}
                                                    ref={(li) => subListRef.current.push(li)}
                                                    className={`lg:px-3 pl-2 py-2 hover:bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-600 hover:to-emerald-800 hover:text-white
                                                     
                                                     `}>
                                                        {subData.name}
                                                </li>
                                            </Link>
                                })
                            }
                        </ul>
                    </div>
                }
            
            </li>
        
    );
}

export default MenuItem;