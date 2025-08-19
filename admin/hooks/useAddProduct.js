import { useState, useEffect } from "react";

const useAddProduct = () => {
    const [isLoading, setLoading] = useState(false);

    const addProduct = products => {
        if (!products) {
            return false;
        }
    };
    return {isLoading,addProduct}
};

export default useAddProduct;
