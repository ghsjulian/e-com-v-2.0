import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAdminStore from "../store/useAdmin";

const Adminlogin = () => {
    const navigate = useNavigate()
    const { loginNow, isSigningIn } = useAdminStore();
    const msgRef = useRef(null);
    const btnRef = useRef(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const showMessage = (msg, type) => {
        if (type) {
            msgRef.current.textContent = msg;
            msgRef.current.classList.add("success");
        } else {
            msgRef.current.textContent = msg;
            msgRef.current.classList.add("error");
        }
        setTimeout(() => {
            msgRef.current.textContent = "";
            msgRef.current.removeAttribute("class");
        }, 2500);
    };
    const checkValidation = (email, password) => {
        if (!email || email === "") {
            showMessage("Admin Email Is Required", false);
            return false;
        } else if (!password || password === "") {
            showMessage("Admin Password Is Required", false);
            return false;
        } else {
            return true;
        }
    };
    const handleLogin = async e => {
        e.preventDefault();
        if (!checkValidation(email.trim(), password.trim())) return;
        await loginNow(
            { email: email.trim(), password: password.trim() },
            showMessage,navigate
        );
    };

    return (
        <div className="login-container">
            <h2>Admin Login</h2>
            <span ref={msgRef} id="msg"></span>
            <br />
            <br />

            <div className="form-group">
                <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    id="email"
                    placeholder="Enter Admin Email"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    id="password"
                    placeholder="Enter Admin Password"
                    required
                />
            </div>
            <div className="form-group">
                <button ref={btnRef} onClick={handleLogin} type="submit">
                    {isSigningIn ? "Processing..." : "Login Now"}
                </button>
            </div>
            <div className="forgot-password">
                <a href="#">Forgot Password?</a>
            </div>
            <div className="error-message">Invalid username or password</div>
        </div>
    );
};

export default Adminlogin;
