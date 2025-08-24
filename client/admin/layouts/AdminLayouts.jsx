import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/admin.layout.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import IsAdmin from "../auth/IsAdmin";

const AdminLayouts = () => {
    return (
        <><IsAdmin>
            <Header />
            <Sidebar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </IsAdmin>
        </>
    );
};

export default AdminLayouts;
