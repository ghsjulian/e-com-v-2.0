import React, { useEffect } from "react";
import axios from "./axios.js";

const Signup = () => {
    const signup = async (data) => {
        try {
            const res = await axios.post("/signup", data);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        signup({
            name: "Ghs Julian",
            email: "ghsjulian@gmail.com",
            phone: "01302661227",
            password : "123456"
        });
    }, []);
    return (
        <div>
            <h2>Signup API </h2>
        </div>
    );
};

export default Signup;
