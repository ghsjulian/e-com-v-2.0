import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAdminApi from "../store/useAdminApi";

const Editproduct = () => {
    const navigate = useNavigate();
    const { product_id } = useParams();
    const {
        fetchSingleProduct,
        isAddingProduct,
        isFetchingProduct,
        productData
    } = useAdminApi();
    const msgRef = useRef(null);
    const [images, setImages] = useState([]);
    const [product, setProduct] = useState({
        product_images: [],
        product_name: productData?.product_name,
        product_price: productData?.product_info?.price,
        product_quantity: productData?.product_info?.quantity,
        product_category: productData?.product_info?.category,
        product_description: productData?.product_info?.description
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };
    // Function to add a new image
    const addImage = newImage => {
        setImages(prevImages => [...prevImages, newImage]);
    };

    // Function to remove an image by index
    const removeImage = index => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };
    const handleFileChange = e => {
        const files = Array.from(e.target.files);
        if (e.target.files.length > 0) {
            for (let i = 0; i < e.target.files.length; i++) {
                addImage(e.target.files[i]);
            }
        }
    };

    const showMessage = (msg, type) => {
        if (type) {
            msgRef.current.style.color = "#008319";
            msgRef.current.textContent = msg;
            msgRef.current.classList.add("success");
        } else {
            msgRef.current.style.color = "#bd2707";
            msgRef.current.textContent = msg;
            msgRef.current.classList.add("error");
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setTimeout(() => {
            msgRef.current.textContent = "";
            msgRef.current.removeAttribute("class");
        }, 2500);
    };
    const checkValidation = () => {
        if (images?.length === 0) {
            showMessage("Product Images Required", false);
            return false;
        } else if (!product.product_name || product.product_name === "") {
            showMessage("Product Name Is Required", false);
            return false;
        } else if (!product.product_price || product.product_price === "") {
            showMessage("Product Price Is Required", false);
            return false;
        } else if (
            !product.product_quantity ||
            product.product_quantity === ""
        ) {
            showMessage("Product Quantity Is Required", false);
            return false;
        } else if (
            !product.product_category ||
            product.product_category === ""
        ) {
            showMessage("Product Category Is Required", false);
            return false;
        } else if (
            !product.product_description ||
            product.product_description === ""
        ) {
            showMessage("Product Description Is Required", false);
            return false;
        } else {
            return true;
        }
    };

    const handleAddproduct = async e => {
        if (!checkValidation()) return;
        const formData = new FormData();
        const productInfo = {
            price: product.product_price,
            quantity: product.product_quantity,
            category: product.product_category,
            description: product.product_description
        };

        images.forEach(img => formData.append("files", img));
        formData.append("product_name", product.product_name);
        formData.append("product_info", JSON.stringify(productInfo));
        await product(formData, showMessage, navigate);
    };
    useEffect(() => {
        fetchSingleProduct(product_id);
    }, [fetchSingleProduct,product_id]);
    if (!isFetchingProduct) {
        console.log(product);
    }
    return (
        <section className="form-container">
            <h2>Edit/Update Current Product</h2>
            <div className="form-group">
                <label ref={msgRef} id="msg"></label>
            </div>
            <div className="form-group">
                <label className="file-input" htmlFor="files">
                    Select product images
                </label>
                <input
                    type="file"
                    id="files"
                    accept="image/*"
                    hidden={true}
                    multiple={true}
                    onChange={handleFileChange}
                />
            </div>
            {images?.length > 0 && (
                <div className="form-group flex-container">
                    {images?.map((img, index) => {
                        return (
                            <div key={index} className="box">
                                <img
                                    src={URL.createObjectURL(img)}
                                    alt="Product Image"
                                />
                                <span onClick={() => removeImage(index)}>
                                    x
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
            <div className="form-group">
                <label htmlFor="product_name">Product Name</label>
                <input
                    type="text"
                    id="product_name"
                    name="product_name"
                    onChange={handleChange}
                    value={product.product_name}
                    placeholder="Enter product name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="product_price">Price</label>
                <input
                    onChange={handleChange}
                    value={product.product_price}
                    type="number"
                    id="product_price"
                    name="product_price"
                    placeholder="Enter price"
                    step="0.01"
                />
            </div>
            <div className="form-group">
                <label htmlFor="product_stock">Stock And Quantity</label>
                <input
                    onChange={handleChange}
                    value={product.product_quantity}
                    type="number"
                    id="product_stock"
                    name="product_quantity"
                    placeholder="Enter stock quantity"
                />
            </div>
            <div className="form-group">
                <label htmlFor="product_category">Category</label>
                <select
                    id="product_category"
                    name="product_category"
                    onChange={handleChange}
                    value={product.product_category}
                >
                    <option value="">Select category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessories">Accessories</option>
                    <option value="home">Home & Garden</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="product_description">Description</label>
                <textarea
                    onChange={handleChange}
                    value={product.product_description}
                    id="product_description"
                    name="product_description"
                    placeholder="Enter product description"
                ></textarea>
            </div>
            <div className="form-group">
                <button onClick={handleAddproduct} type="button">
                    {isAddingProduct ? "Please Wait..." : "Add Product"}
                </button>
            </div>
        </section>
    );
};

export default Editproduct;
