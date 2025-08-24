import React from "react";
import { Navigate } from "react-router-dom";
import useAdminStore from "../store/useAdmin";

const IsAdmin = ({ children }) => {
    const { admin } = useAdminStore();
    return (
        <>
            {admin && admin?.role === "ADMIN" ? (
                children
            ) : (
                <Navigate to="/admin/login" />
            )}
        </>
    );
};

export default IsAdmin;
