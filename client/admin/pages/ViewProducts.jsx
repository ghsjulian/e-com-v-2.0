import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useAdminApi from "../store/useAdminApi";

const ViewProducts = () => {
    const { products, fetchAllProducts, isFetchingAllProduct, deleteProduct } =
        useAdminApi();

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);
    return (
        <section className="products-container">
            <h2>
                {isFetchingAllProduct
                    ? "Fetching All Products..."
                    : "All Products List"}
            </h2>
            {products?.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Thumbnail</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, index) => {
                            return (
                                <tr id={product._id} key={index}>
                                    <td id="product-id">{index + 1}</td>
                                    <td>
                                        <img
                                            src={product.product_images[0]}
                                            alt="Product Image"
                                        />
                                    </td>
                                    <td>{product.product_name}</td>
                                    <td>{product.product_info.category}</td>
                                    <td>{product.product_info.price}</td>
                                    <td>{product.product_info.quantity}</td>
                                    <td className="action-buttons">
                                        <NavLink
                                            to={`/admin/edit-product/${product._id}`}
                                        >
                                            Edit
                                        </NavLink>
                                        <NavLink
                                            onClick={async e => {
                                                e.preventDefault(),
                                                    await deleteProduct(
                                                        product._id,
                                                        e.target.parentElement
                                                            .parentElement
                                                    );
                                            }}
                                            to="#"
                                        >
                                            Delete
                                        </NavLink>
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

export default ViewProducts;
