import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { LuAlignJustify } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import AdminSidebar from "./AdminSidebar";
import AdminNotification from "./AdminNotification";
import AdminOrder from "./AdminOrder";

const AdminHeader = () => {
    const [isOpen, setOpen] = useState(false);
    const [isNoti, setNoti] = useState(false);
    const [isOrder, setOrder] = useState(false);
    const openNav = e => {
        e.preventDefault();
        setOpen(!isOpen);
    };
    const openNoti = (e) => {
        setNoti(!isNoti);
        e.preventDefault();
    };
    const openOrder = (e) => {
        setOrder(!isOrder);
        e.preventDefault();
    };

    return (
        <>
            <header className="admin-header">
                <h3>
                    {/*E<strong>-</strong>
                    <span>Buy</span>*/}
                    Admin<strong>-</strong>
                    <span>Dashboard</span>
                </h3>
                <div className="admin-header-links">
                    <NavLink onClick={openNoti}>
                        <FiBell />
                    </NavLink>
                    <NavLink onClick={openOrder} className="bag">
                        <BsHandbag />
                    </NavLink>
                    <NavLink>
                        <FaRegCircleUser />
                    </NavLink>
                    <NavLink onClick={openNav} className="admin-nav">
                        <LuAlignJustify size={27} />
                    </NavLink>
                </div>
            </header>
            <aside className={isOpen ? "admin-open-sidebar" : "admin-sidebar"}>
                <h3>Main Menu</h3>
                <AdminSidebar />
            </aside>
            {isOpen && (
                <div onClick={openNav} className="admin-close-nav"></div>
            )}
            <div className="float-area">
                {isNoti && <AdminNotification />}
                {isOrder && <AdminOrder />}
            </div>
        </>
    );
};

export default AdminHeader;
