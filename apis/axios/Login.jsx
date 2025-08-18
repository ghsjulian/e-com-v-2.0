import React, { useEffect } from "react";
import axios from "./axios.js";

const Login = () => {
    const login = async data => {
        try {
            const res = await axios.post("/login", data);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };
    login({
        email: "ghsjulian@gmail.com",
        password: "123456"
    });

    return (
        <div>
            <h2>Login API </h2>
        </div>
    );
};

export default Login;
