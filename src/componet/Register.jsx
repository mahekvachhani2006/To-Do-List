import React, { useState } from "react";
import "./Home.css";
import ModeContext from "../context/Mode_context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    conPassword: "",
  });

  const [error, setError] = useState({});
  const { isDarkMode } = useContext(ModeContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // console.log({ name, value });
    setFormData({ ...formData, [name]: value });
    // setFormData((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }))
    setError({ ...error, [name]: "" });
    setError((prevError) => {
      const newError = { ...prevError };
      delete newError[name];
      return newError;
    });
  };
  // console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("registerData", JSON.stringify(formData))
      console.log("done");
      navigate("/");
    } else {
      alert("something went wrong!!");
      return;
    }
  };

  const validate = () => {
    const newError = {};
    if (!formData.userName.trim()) {
      newError.userName = "Username name is required!";
    }
    if (!formData.email.trim()) {
      newError.email = "Email is required!";
    }
    if (!formData.password.trim()) {
      newError.password = "Password is required!";
    }
    if (!formData.conPassword.trim()) {
      newError.conPassword = "Confirm Password is required!";
    } else if (formData.password !== formData.conPassword) {
      newError.conPassword = "Password and Confirm Password are not same!!";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  return (
  <div className={`${!isDarkMode ? "nav" : "nav-light"}`}>

    <div className="register-container">
      <h1 className="title">REGISTER</h1>
      <p className="subtitle">Create your account</p>

      <form onSubmit={handleSubmit} className="form-box">
        
        <label className="label">User Name:</label>
        <input
          type="text"
          name="userName"
          placeholder="Enter your name"
          onChange={handleInputChange}
          className="input-box"
        />
        {error.userName && <p className="error">{error.userName}</p>}

        <label className="label">Email Address:</label>
        <input
          type="email"
          name="email"
          placeholder="john@doe.com"
          onChange={handleInputChange}
          className="input-box"
        />
        {error.email && <p className="error">{error.email}</p>}

        <label className="label">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          onChange={handleInputChange}
          className="input-box"
        />
        {error.password && <p className="error">{error.password}</p>}

        <label className="label">Confirm Password:</label>
        <input
          type="password"
          name="conPassword"
          placeholder="Confirm your password"
          onChange={handleInputChange}
          className="input-box"
        />
        {error.conPassword && <p className="error">{error.conPassword}</p>}

        <button type="submit" className="btn">Register</button>
      </form>
    </div>

  </div>
);

};
