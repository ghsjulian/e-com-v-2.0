import React, { useEffect } from "react";
import useAdminApi from "../store/useAdminApi";

const DashboardOverview = () => {
    const {
        settings,
        products,
        customers,
        getSettings,
        fetchAllProducts,
        fetchAllCustomers
    } = useAdminApi();

    useEffect(() => {
        getSettings();
        fetchAllCustomers();
        fetchAllProducts();
    }, [getSettings, fetchAllCustomers, fetchAllProducts]);

    return (
        <section className="dashboard-overview">
            <h1>Dashboard Overview</h1>
            <div className="dashboard-cards">
                <div className="card">
                    <div className="icon">💰</div>
                    <h3>Total Sales</h3>
                    <div className="value">$15,678</div>
                </div>
                <div className="card">
                    <div className="icon">🛒</div>
                    <h3>New Orders</h3>
                    <div className="value">62</div>
                </div>
                <div className="card">
                    <div className="icon">📦</div>
                    <h3>Total Products</h3>
                    <div className="value">{products?.length}</div>
                </div>
                <div className="card">
                    <div className="icon">👥</div>
                    <h3>Total Customers</h3>
                    <div className="value">{customers?.length}</div>
                </div>
            </div>
        </section>
    );
};

export default DashboardOverview;
