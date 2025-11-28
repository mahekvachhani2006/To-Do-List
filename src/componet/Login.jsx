import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import "./Home.css";
import "./Register.css";
import ModeContext from "../context/Mode_context";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ModeContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    setError((prev) => {
      const newError = { ...prev };
      delete newError[name];
      return newError;
    });
  };

  const validate = () => {
    const newError = {};

    if (!formData.email.trim()) {
      newError.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Invalid email format!";
    }

    if (!formData.password.trim()) {
      newError.password = "Password is required!";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const savedUser = JSON.parse(localStorage.getItem("registerData"));
    if (!savedUser) {
      toast.error("No user found! Please register first.");
      return;
    }

    if (
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      const otp = Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem("loginOtp", otp);
      navigate("/otp");
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <div className={`${!isDarkMode ? "nav" : "nav-light"}`}>
      <div className="register-container">
        <h1 className="title">Login</h1>
        <p className="subtitle">Welcome Back</p>

        <form onSubmit={handleSubmit} className="form-box">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            className="input-box"
          />
          {error.email && <p className="error">{error.email}</p>}

          <label className="label">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleInputChange}
            className="input-box"
          />
          {error.password && <p className="error">{error.password}</p>}

          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};