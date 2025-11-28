import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join("");
    const storedOtp = localStorage.getItem("loginOtp");

    if (enteredOtp === storedOtp) {
      toast.success("OTP Verified Successfully!");

      localStorage.setItem("user", true);
      localStorage.removeItem("tempLogin");

      navigate("/");
    } else {
      toast.error("Incorrect OTP!");
    }
  };

  return (
    <div className="otp-container">
      <h2>Enter OTP</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
              fontSize: "18px",
            }}
          />
        ))}
      </div>

      <button onClick={verifyOtp}>Verify OTP</button>
    </div>
  );
};