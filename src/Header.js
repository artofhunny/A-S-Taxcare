import { useEffect, useRef, useState } from "react";
import headerData from "./utils/constants"
import MenuItem from "./components/MenuItem";
import { Link } from "react-router-dom";
import logo from './utils/A&S TaxCare.png';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=stat_minus_1" />

const Header = () => {

    const menuRef = useRef(null);
    const [menuShow, setMenuShow] = useState(false);
    const navListsRef = useRef([]);
    const [activeItem, setActiveItem] = useState(null);
    

    // useEffect(() => {
    //     setListNum(0);
    // }, []);

    const handleMenu = () => {
        setMenuShow(!menuShow);
        if(!menuShow){
            menuRef.current.style.left = 0;
        }
        else{
            menuRef.current.style.left = "-100%";
        }
    }


    return (
            <header className="bg-white sticky bg-gradient-to-r from-emerald-900 to-emerald-300 top-0 font-medium flex items-center justify-between md:text-sm md:gap-1 lg:text-base px-2 py-1 md:px-4 z-30 lg:px-10 lg:py-1">
            {/* <p className="lg:text-xl md:text-sm text-white lg:py-4">A&S TaxCare</p> */}

            <img 
                src={logo}
                alt="logo"
                className="w-32 self-center"
            />

            <ul ref={menuRef} className="block  fixed md:static md:text-black bg-gradient-to-b md:bg-none w-full md:w-auto -left-full duration-700 from-emerald-400 to-emerald-800 top-10 text-white md:gap-4 md:flex">
                {/* <Link to={'/'}>
                    <li className="relative cursor-pointer px-4 border-b-2 border-solid border-white hover:bg-emerald-700 hover:rounded-lg py-2 lg:py-4 group sm:py-1 md:py-2 text-white">Home</li>
                </Link> */}
                {headerData.map((data, i) => {
                    return <MenuItem key={i + "#"} 
                                    index={i}
                                    // itemRef={navListsRef}
                                    itemData={data}
                                    activeItem={activeItem}
                                    setActiveItem={setActiveItem} />
                })}
            </ul>

            <Link to={'/contact'}>
                <button className="bg-yellow-400 shadow-lg text-sm px-2 py-[2px] my-2 lg:text-lg lg:px-4 md:block hidden lg:py-2  rounded self-center">Contact Us</button>
            </Link>
            <span
                onClick={handleMenu}
                className="material-symbols-outlined md:hidden block text-emerald-700 my-1">
                {menuShow? "close" : "menu"}
            </span>
        </header>
    );
}

export default Header;