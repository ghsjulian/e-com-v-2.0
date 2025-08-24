import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import AdminLayouts from "./admin/layouts/AdminLayouts";
import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import Addproduct from "./admin/pages/AddProduct";
import EditProduct from "./admin/pages/EditProduct";
import Customers from "./admin/pages/Customers";
import ViewOrder from "./admin/pages/ViewOrder";
import ViewProducts from "./admin/pages/ViewProducts";
import ViewAnalytics from "./admin/pages/ViewAnalytics";
import CreateCategory from "./admin/pages/CreateCategory";
import Settings from "./admin/pages/Settings";
import useAdminStore from "./admin/store/useAdmin";
/*--> Website Components Will Be Imported Here <--*/
import AppLayouts from "./app/layouts/AppLayouts";
import Home from "./app/pages/Home";

const App = () => {
    const { admin } = useAdminStore();
    return (
        <Router>
            <Routes>
                <Route exact path="/admin" element={<AdminLayouts />}>
                    <Route index path="/admin" element={<Dashboard />} />
                    <Route  path="dashboard" element={<Dashboard />} />
                    <Route path="add-product" element={<Addproduct />} />
                    <Route
                        path="edit-product/:product_id"
                        element={<EditProduct />}
                    />
                    <Route path="view-customers" element={<Customers />} />
                    <Route path="view-products" element={<ViewProducts />} />
                    <Route path="view-orders" element={<ViewOrder />} />
                    <Route path="view-analytics" element={<ViewAnalytics />} />
                    <Route
                        path="create-category"
                        element={<CreateCategory />}
                    />
                    <Route path="settings" element={<Settings />} />
                </Route>
                <Route
                    path="/admin/login"
                    element={
                        !admin && admin?.role !== "ADMIN" ? (
                            <AdminLogin />
                        ) : (
                            <Navigate to="/admin/dashboard" />
                        )
                    }
                />
                {/*--> Website App Route Will Be Defined Here <--*/}
                <Route exact path="/" element={<AppLayouts />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
