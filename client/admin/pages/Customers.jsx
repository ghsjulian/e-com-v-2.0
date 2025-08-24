import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAdminApi from "../store/useAdminApi";

const Customers = () => {
    const { fetchAllCustomers, isFetchingCustomer, customers ,deleteCustomer} = useAdminApi();

    useEffect(() => {
        fetchAllCustomers();
    }, [fetchAllCustomers]);
    return (
        <section className="customers-container">
            <h2>
                {isFetchingCustomer
                    ? "Fetching Customer...."
                    : "Total Customers List"}
            </h2>
            {customers?.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Orders</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers?.map((customer, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>5</td>
                                    <td className="action-buttons">
                                        <NavLink to="#">View</NavLink>
                                        <NavLink onClick={async(e)=>{
                                            e.preventDefault()
                                            await deleteCustomer(customer._id,e.target.parentElement.parentElement)
                                        }} to="#">Delete</NavLink>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </section>
    );
};

export default Customers;
