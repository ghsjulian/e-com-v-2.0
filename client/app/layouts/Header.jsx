import React from "react";
import { NavLink } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { BsBoxArrowInRight } from "react-icons/bs";
import { LuAlignJustify } from "react-icons/lu";
import { FiBell } from "react-icons/fi";

const Header = () => {
    return (
        <div className="header">
            <div className="app-logo">
                E-Com<span>V2.0</span>
            </div>
            <div className="nav-links">
                <NavLink to="#">
                    <BsHandbag size={22} />
                </NavLink>
                <NavLink style={{ marginTop: "4px" }} to="#">
                    <FiBell size={22} />
                </NavLink>
                <label htmlFor="menu-toggle" className="menu-btn" style={{ marginTop: "4px" }} >
                    <LuAlignJustify size={25} />
                </label>
            </div>
            
        </div>
    );
};

export default Header;
