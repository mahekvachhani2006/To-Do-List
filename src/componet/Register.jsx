import React from "react";
import "./Home.css";
import ModeContext from "../context/Mode_context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Register = () => {
  const navigate = useNavigate();

  // -------------------------- OLD STATE (COMMENTED) --------------------------
  // const [formData, setFormData] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  //   conPassword: "",
  // });

  // const [error, setError] = useState({});
  // --------------------------------------------------------------------------

  const { isDarkMode } = useContext(ModeContext);

  // ---------------------- OLD INPUT HANDLER (COMMENTED) -----------------------
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData({ ...formData, [name]: value });

  //   setError({ ...error, [name]: "" });
  //   setError((prevError) => {
  //     const newError = { ...prevError };
  //     delete newError[name];
  //     return newError;
  //   });
  // };
  // ---------------------------------------------------------------------------

  // ---------------------- OLD SUBMIT HANDLER (COMMENTED) ---------------------
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     localStorage.setItem("registerData", JSON.stringify(formData));
  //     navigate("/");
  //   } else {
  //     alert("something went wrong!!");
  //     return;
  //   }
  // };
  // ---------------------------------------------------------------------------

  // --------------------------- OLD VALIDATION (COMMENTED) --------------------
  // const validate = () => {
  //   const newError = {};
  //   if (!formData.userName.trim()) {
  //     newError.userName = "Username name is required!";
  //   }
  //   if (!formData.email.trim()) {
  //     newError.email = "Email is required!";
  //   }
  //   if (!formData.password.trim()) {
  //     newError.password = "Password is required!";
  //   }
  //   if (!formData.conPassword.trim()) {
  //     newError.conPassword = "Confirm Password is required!";
  //   } else if (formData.password !== formData.conPassword) {
  //     newError.conPassword = "Password and Confirm Password are not same!!";
  //   }
  //   setError(newError);
  //   return Object.keys(newError).length === 0;
  // };
  // ---------------------------------------------------------------------------

  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ---------------------------- YUP VALIDATION -------------------------------
  const signupSchema = Yup.object({
    userName: Yup.string()
      .required("Username is required")
      .min(3, "Username must be atleast 3 character long."),
    email: Yup.string()
      .matches(emailRegEx, "Please enter valid email address")
      .required("Email Address is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be 6 character long"),
    conPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  // ---------------------------------------------------------------------------

  // ------------------------------ FORMIK -------------------------------------
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      conPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      localStorage.setItem("registerData", JSON.stringify(values));
      navigate("/");
    },
  });
  // ---------------------------------------------------------------------------

  return (
    <div className={`${!isDarkMode ? "nav" : "nav-light"}`}>
      <div className="register-container">
        <h1 className="title">REGISTER</h1>
        <p className="subtitle">Create your account</p>

        {/* OLD onSubmit commented */}
        {/* <form onSubmit={handleSubmit} className="form-box"> */}

        <form onSubmit={formik.handleSubmit} className="form-box">
          
          <label className="label">User Name:</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            className="input-box"
            // onChange={handleInputChange}  // old
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
          {/* OLD error */}
          {/* {error.userName && <p className="error">{error.userName}</p>} */}

          {formik.touched.userName && formik.errors.userName && (
            <p className="error">{formik.errors.userName}</p>
          )}

          <label className="label">Email Address:</label>
          <input
            type="email"
            name="email"
            placeholder="john@doe.com"
            className="input-box"
            // onChange={handleInputChange}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {/* OLD error */}
          {/* {error.email && <p className="error">{error.email}</p>} */}
          
          {formik.touched.email && formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}

          <label className="label">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="input-box"
            // onChange={handleInputChange}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {/* OLD error */}
          {/* {error.password && <p className="error">{error.password}</p>} */}

          {formik.touched.password && formik.errors.password && (
            <p className="error">{formik.errors.password}</p>
          )}

          <label className="label">Confirm Password:</label>
          <input
            type="password"
            name="conPassword"
            placeholder="Confirm your password"
            className="input-box"
            // onChange={handleInputChange}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.conPassword}
          />
          {/* OLD error */}
          {/* {error.conPassword && <p className="error">{error.conPassword}</p>} */}

          {formik.touched.conPassword && formik.errors.conPassword && (
            <p className="error">{formik.errors.conPassword}</p>
          )}

          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  );
};