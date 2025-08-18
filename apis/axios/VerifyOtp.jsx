import React, { useEffect } from "react";
import axios from "./axios.js";

const VerifyOtp = () => {
    const verify = async data => {
        try {
            const res = await axios.post("/verify-otp", data);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };
    verify({
        otp : "123456"
    });

    return (
        <div>
            <h2>Verify OTP API </h2>
        </div>
    );
};

export default VerifyOtp;
