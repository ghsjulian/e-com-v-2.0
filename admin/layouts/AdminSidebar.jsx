import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
import { useLocation } from "react-router-dom";

const AdminSidebar = () => {
    const location = useLocation();
    const [path, setPath] = useState("");
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    return (
        <div className="admin-menu-list">
            <NavLink className={path === "/admin" ? "active": ""}  to="/admin">
                <div className="icon">
                    <MdOutlineDashboardCustomize />
                </div>
                <span>Admin Dashboard</span>
            </NavLink>
            <NavLink className={path === "/admin/orders" ? "active": ""}  to="/orders">
                <div className="icon">
                    <FaBorderNone />
                </div>
                <span>Total Orders</span>
            </NavLink>
            <NavLink className={path === "/admin/view-products" ? "active": ""}  to="/admin/view-products">
                <div className="icon">
                    <BsHandbag />
                </div>
                <span>View Products</span>
            </NavLink>
            <NavLink className={path === "/admin/add-product" ? "active": ""}  to="/admin/add-product">
                <div className="icon">
                    <IoBagAddOutline />
                </div>
                <span>Add Product</span>
            </NavLink>
            <NavLink className={path === "/admin/view-collections" ? "active": ""}  to="/admin/view-collections">
                <div className="icon">
                    <HiOutlineCollection />
                </div>
                <span>View Collections</span>
            </NavLink>
            <NavLink className={path === "/admin/view-delivery" ? "active": ""}  to="/admin/view-delivery">
                <div className="icon">
                    <CiDeliveryTruck />
                </div>
                <span>View Deliveries</span>
            </NavLink>
            <NavLink className={path === "/admin/create-category" ? "active": ""}  to="/admin/create-category">
                <div className="icon">
                    <MdOutlineCategory />
                </div>
                <span>Create Categories</span>
            </NavLink>
            <NavLink className={path === "/admin/settings" ? "active": ""}  to="/admin/settings">
                <div className="icon">
                    <GoGear />
                </div>
                <span>Settings</span>
            </NavLink>
            <NavLink className={path === "/admin/about-us" ? "active": ""}  to="/admin/about-us">
                <div className="icon">
                    <MdInfoOutline />
                </div>
                <span>About US</span>
            </NavLink>
            <NavLink className={path === "/admin/contact-us" ? "active": ""}  to="/admin/contact-us">
                <div className="icon">
                    <MdOutlineWhatsapp />
                </div>
                <span>Contact US</span>
            </NavLink>
            <NavLink className={path === "/admin/report-us" ? "active": ""}  to="/admin/report-us">
                <div className="icon">
                    <LuChartNoAxesCombined />
                </div>
                <span>Report US</span>
            </NavLink>
            <NavLink className={path === "/admin/privacy-policy" ? "active": ""}  to="/admin/privacy-policy">
                <div className="icon">
                    <MdOutlinePrivacyTip />
                </div>
                <span>Privacy & Policy</span>
            </NavLink>
        </div>
    );
};

export default AdminSidebar;
