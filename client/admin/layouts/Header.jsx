import React from "react";
import { useNavigate } from 'react-router-dom'
import { LuAlignJustify } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
    const navigate = useNavigate()
    
    
    return (
        <>
            <header>
                <div onClick={()=>navigate("/admin/dashboard")} className="logo">
                    Admin-<p>Dashboard</p>
                </div>
                <div className="user-profile">
                    <div className="noti">
                        <FiBell size={22} />
                    </div>
                    <div className="user">
                        <FaRegCircleUser size={22} />
                    </div>
                    <label htmlFor="menu-toggle" className="menu-icon">
                        <LuAlignJustify size={25} />
                        {/*&#9776;*/}
                    </label>
                </div>
            </header>
        </>
    );
};

export default Header;
