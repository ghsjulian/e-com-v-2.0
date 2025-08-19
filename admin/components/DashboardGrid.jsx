import React from "react";
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

const DashboardGrid = () => {
    return (
        <div className="admin-grid">
            <div className="admin-col">
                <div className="icon">
                    <MdOutlineDashboardCustomize />
                </div>
                <span>Dashboard</span>
            </div>
            <div className="admin-col">
                <div className="icon">
                    <LuChartNoAxesCombined />
                </div>
                <span>Business Reports</span>
            </div>
            <div className="admin-col">
                <div className="icon">
                    <CiDeliveryTruck />
                </div>
                <span>Delivered Info</span>
            </div>
            <div className="admin-col">
                <div className="icon">
                    <IoBagAddOutline />
                </div>
                <span>New Products</span>
            </div>
            <div className="admin-col">
                <div className="icon">
                    <MdOutlineCategory />
                </div>
                <span>Categories</span>
            </div>
            <div className="admin-col">
                <div className="icon">
                    <FaBorderNone />
                </div>
                <span>Business Orders</span>
            </div>
            <div className="admin-col">
                <div className="icon">
                    <MdOutlineWhatsapp />
                </div>
                <span>Contact Info</span>
            </div>
            <div className="admin-col">
                <div className="icon">
                    <MdOutlinePrivacyTip />
                </div>
                <span>Privacy Policy</span>
            </div>
            <div className="admin-col">
                <div className="icon">
                    <GoGear />
                </div>
                <span>Admin Settings</span>
            </div>
            <div className="admin-col">
                <div className="icon">
                    <HiOutlineCollection />
                </div>
                <span>View Collections</span>
            </div>
            <div className="admin-col">
                <div className="icon">
                    <CiDeliveryTruck />
                </div>
                <span>Delivered Info</span>
            </div>
            <div className="admin-col">
                <div className="icon">
                    <IoBagAddOutline />
                </div>
                <span>New Products</span>
            </div>
        </div>
    );
};

export default DashboardGrid;
