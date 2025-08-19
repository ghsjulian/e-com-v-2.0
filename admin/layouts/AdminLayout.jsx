import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import "../styles/admin.style.css";
import "../styles/admin.pages.css";

const AdminLayout = () => {
    return (
        <>
            <AdminHeader />
            <main className="admin-main-page">
            <Outlet />
            </main>
        </>
    );
};

export default AdminLayout;
