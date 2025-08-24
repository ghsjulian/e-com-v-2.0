import { create } from "zustand";
import axios from "../libs/axios";

const useAdminStore = create((set, get) => ({
    admin: JSON.parse(localStorage.getItem("e-com-v-2.0")) || null,
    isSigningIn: false,

    loginNow: async (data, showMessage, navigate) => {
        try {
            set({ isSigningIn: true });
            const res = await axios.post("/login", data);
            if (!res?.data.success) {
                showMessage(res?.data?.message, false);
                return;
            }
            localStorage.setItem(
                "e-com-v-2.0",
                JSON.stringify(res?.data?.user)
            );
            showMessage(res?.data?.message, true);
            setTimeout(() => {
                navigate("/admin/dashboard");
                set({admin:res?.data?.user})
            }, 1500);
        } catch (error) {
            showMessage(error?.response?.data?.message, false);
        } finally {
            set({ isSigningIn: false });
        }
    },
    logout : async()=>{
        try{
            const res = await axios.post("/logout")
            if(res?.data?.success){
                localStorage.removeItem("e-com-v-2.0")
                set({admin: null})
            }
        }catch(error){
            console.log(error)
        }
    }
}));

export default useAdminStore;
