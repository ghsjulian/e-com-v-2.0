import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "../admin/layouts/AdminLayout";
import AdminDashboard from "../admin/pages/AdminDashboard";
import AddProduct from "../admin/pages/AddProduct";
import EditProduct from "../admin/pages/EditProduct";
import AdminLogin from "../admin/pages/Login";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route
                        index
                        path="dashboard"
                        element={<AdminDashboard />}
                    />
                    <Route index path="add-product" element={<AddProduct />} />
                    <Route
                        path="edit-product/:product_id"
                        element={<EditProduct />}
                    />
                </Route>
                <Route path="/admin/login" element={<AdminLogin />} />
            </Routes>
        </Router>
    );
};

export default App;
