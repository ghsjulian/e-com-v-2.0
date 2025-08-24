import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAdminApi from "../store/useAdminApi";

const CreateCategory = () => {
    const { createCategory } = useAdminApi();
    const navigate = useNavigate();
    const [category, setCategory] = useState("");
    return (
        <section className="form-container">
            <h2>Create New Category</h2>
            <div className="form-group">
                <label htmlFor="category-name">Category Name</label>
                <input
                    onChange={e => setCategory(e.target.value)}
                    value={category}
                    type="text"
                    id="category-name"
                    placeholder="Enter Category Name"
                />
            </div>
            <div className="form-group">
                <button
                    onClick={async e => {
                        if (!category || category === "") return;
                        await createCategory(category, navigate);
                    }}
                    type="button"
                >
                    Create Category
                </button>
            </div>
        </section>
    );
};

export default CreateCategory;
