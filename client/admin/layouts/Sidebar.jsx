import React, { useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineCollection } from "react-icons/hi";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { FaBorderNone } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineWhatsapp } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";
import useAdmin from "../store/useAdmin"


const Sidebar = () => {
    const {logout} = useAdmin()
    const inputRef = useRef(null);
    const location = useLocation();
    const [path, setPath] = useState("");
    const closeMenu = () => {
        inputRef.current.checked = false;
    };
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    return (
        <>
            <input ref={inputRef} type="checkbox" id="menu-toggle" />
            <nav className="sidebar">
                <ul>
                    <li>
                        <NavLink
                            className={path === "dashboard" ? "active" : ""}
                            onClick={closeMenu}
                            to="dashboard"
                        >
                            <MdOutlineDashboardCustomize size={22} /> Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={path === "add-product" ? "active" : ""}
                            onClick={closeMenu}
                            to="add-product"
                        >
                            <IoBagAddOutline size={22} /> Add Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={path === "view-products" ? "active" : ""}
                            onClick={closeMenu}
                            to="view-products"
                        >
                            <IoBagAddOutline size={22} />
                            View Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={path === "view-orders" ? "active" : ""}
                            onClick={closeMenu}
                            to="view-orders"
                        >
                            <BsHandbag size={22} />
                            View Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={
                                path === "view-customers" ? "active" : ""
                            }
                            onClick={closeMenu}
                            to="view-customers"
                        >
                            <HiOutlineCollection size={22} />
                            View All Customers
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={
                                path === "create-category" ? "active" : ""
                            }
                            onClick={closeMenu}
                            to="create-category"
                        >
                            <MdOutlineCategory size={22} /> Create Categories
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={
                                path === "view-analytics" ? "active" : ""
                            }
                            onClick={closeMenu}
                            to="view-analytics"
                        >
                            <LuChartNoAxesCombined size={22} /> View Analytics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={path === "settings" ? "active" : ""}
                            onClick={closeMenu}
                            to="settings"
                        >
                            <GoGear size={22} />
                            Settings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={path === "/admin/logout" ? "active": ""} onClick={(e)=>{
                            e.preventDefault()
                            closeMenu()
                            logout()
                        }} to="/admin/logout">
                            <BsBoxArrowInRight size={22} />
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
