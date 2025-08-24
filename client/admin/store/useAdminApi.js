import { create } from "zustand";
import axios from "../libs/axios";
import useAdminStore from "./useAdmin";

const useAdminApi = create((set, get) => ({
    isAddingProduct: false,
    isFetchingAllProduct: false,
    isFetchingProduct: false,
    isFetchingCustomer: false,
    settings: {},
    customers: [],
    products: [],
    productData: {},

    addProduct: async (product, showMessage, navigate) => {
        try {
            set({ isAddingProduct: true });
            const res = await axios.post("/add-product", product);
            if (!res?.data?.success) {
                showMessage(res?.data?.message, false);
            }
            showMessage(res?.data?.message, true);
            navigate("/admin/view-products");
        } catch (error) {
            showMessage(error?.response?.data?.message, false);
        } finally {
            set({ isAddingProduct: false });
        }
    },
    fetchAllCustomers: async () => {
        try {
            set({ isFetchingCustomer: true });
            const res = await axios.get("/get-all-customers");
            set({ customers: res?.data });
        } catch (error) {
            set({ customers: [] });
        } finally {
            set({ isFetchingCustomer: false });
        }
    },
    fetchAllProducts: async () => {
        try {
            set({ isFetchingAllProduct: true });
            const res = await axios.get("/get-all-products");
            set({ products: res?.data });
        } catch (error) {
            set({ products: [] });
        } finally {
            set({ isFetchingAllProduct: false });
        }
    },
    fetchSingleProduct: async id => {
        try {
            set({ isFetchingProduct: true });
            const res = await axios.get("/get-product/" + id);
            set({ productData: res?.data });
        } catch (error) {
            set({ productData: {} });
        } finally {
            set({ isFetchingProduct: false });
        }
    },
    deleteProduct: async (id, target) => {
        try {
            const res = await axios.delete("/delete-product/" + id);
            if (res?.data?.success) {
                target.remove();
            }
        } catch (error) {
            return false;
        }
    },
    deleteCustomer: async (id, target) => {
        try {
            const res = await axios.delete("/delete-customer/" + id);
            if (res?.data?.success) {
                target.remove();
            }
        } catch (error) {
            return false;
        }
    },

    createCategory: async (category, navigate) => {
        try {
            const res = await axios.post("/create-category", { category });
            if (res?.data?.success) {
                navigate("/admin/dashboard");
            }
        } catch (error) {
            console.log(error);
        }
    },
    getSettings: async () => {
        try {
            const res = await axios.get("/get-settings");
            set({settings:res?.data})
        } catch (error) {
            set({settings:{}})
        }
    }
}));

export default useAdminApi;
