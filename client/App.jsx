import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "../admin/layouts/AdminLayout";
import AdminDashboard from "../admin/pages/AdminDashboard";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index path="dashboard" element={<AdminDashboard />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
