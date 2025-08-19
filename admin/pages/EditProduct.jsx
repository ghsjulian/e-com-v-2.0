import React, { useState, useRef } from "react";
import { BsCloudUpload } from "react-icons/bs";

const EditProduct = () => {
    const [error, setError] = useState(false);
    const msgRef = useRef(null);
    const [products, setProducts] = useState({
        product_images: [],
        product_title: "",
        product_price: "",
        product_quantity: "",
        product_collection: "",
        product_category: "",
        product_desc: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setProducts(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = e => {
        const files = Array.from(e.target.files);
        console.log(files);
        setProducts(prev => ({
            ...prev,
            product_images: files
        }));
    };

    const validateInputs = () => {
        const {
            product_title,
            product_price,
            product_quantity,
            product_collection,
            product_category,
            product_desc
        } = products;
        if (
            !product_title ||
            !product_price ||
            !product_quantity ||
            !product_collection ||
            !product_category ||
            !product_desc
        ) {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scroll
            });
            msgRef.current.classList.remove("success");
            msgRef.current.classList.add("error");
            msgRef.current.textContent = "All fields are required!";
            return false;
        }
        if (isNaN(product_price) || product_price <= 0) {
            msgRef.current.classList.remove("success");
            msgRef.current.classList.add("error");
            msgRef.current.textContent = "Price must be a positive number!";
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scroll
            });
            return false;
        }
        return true;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validateInputs()) return;
        console.log("Products --> ", products);
        // Send data to the server
        try {
            const response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(products)
            });

            if (response.ok) {
                msgRef.current.textContent = "Product added successfully!";
                // Reset form or handle success
                setProducts({
                    product_images: [],
                    product_title: "",
                    product_price: "",
                    product_quantity: "",
                    product_collection: "",
                    product_category: "",
                    product_desc: ""
                });
            } else {
                msgRef.current.classList.remove("success");
                msgRef.current.classList.add("error");
                msgRef.current.textContent = "Failed to add product!";
                window.scrollTo({
                    top: 0,
                    behavior: "smooth" // Smooth scroll
                });
            }
        } catch (error) {
            msgRef.current.classList.remove("success");
            msgRef.current.classList.add("error");
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scroll
            });
            msgRef.current.textContent = "An error occurred!";
        }

        // Hiding Message
    };
 //    setTimeout(() => {
//         msgRef.current.setAttribute("class", "");
//         msgRef.current.textContent = "";
//     }, 3000);

    return (
        <div className="add-product">
            <h3>Edit Product</h3>
            <div className="add-form">
                <span ref={msgRef}></span>
                <div className="images">
                    {products.product_images.map((image, index) => (
                        <div key={index} className="img-container">
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Product"
                            />
                            <div
                                className="cross"
                                onClick={() => {
                                    const newImages =
                                        products.product_images.filter(
                                            (_, i) => i !== index
                                        );
                                    setProducts(prev => ({
                                        ...prev,
                                        product_images: newImages
                                    }));
                                }}
                            >
                                X
                            </div>
                        </div>
                    ))}
                </div>
                <label htmlFor="files">
                    <div className="icon">
                        <BsCloudUpload />
                    </div>
                    <span>Select Products Image</span>
                </label>
                <input
                    id="files"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    hidden
                />
                <input
                    type="text"
                    name="product_title"
                    placeholder="Enter Product Title"
                    value={products.product_title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="product_price"
                    placeholder="Enter Product Price"
                    value={products.product_price}
                    onChange={handleChange}
                />
                <select
                    name="product_quantity"
                    value={products.product_quantity}
                    onChange={handleChange}
                >
                    <option value="">Select Quantity</option>
                    {[...Array(10).keys()].map(i => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
                <select
                    name="product_collection"
                    value={products.product_collection}
                    onChange={handleChange}
                >
                    <option value="">Select Collection</option>
                    <option value="Mens">Mens</option>
                    <option value="Ladies">Ladies</option>
                    <option value="Babies">Babies</option>
                </select>
                <select
                    name="product_category"
                    value={products.product_category}
                    onChange={handleChange}
                >
                    <option value="">Select Category</option>
                    <option value="t-shirt">T-shirt</option>
                    <option value="saree">Saree</option>
                    <option value="clothes">Clothes</option>
                </select>
                <textarea
                    name="product_desc"
                    placeholder="Write Product Description"
                    value={products.product_desc}
                    onChange={handleChange}
                ></textarea>
                <button className="add-btn" onClick={handleSubmit}>
                    <div className="loader"></div>
                    <span>Update Product</span>
                </button>
            </div>
        </div>
    );
};

export default EditProduct;
