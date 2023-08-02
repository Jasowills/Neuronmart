import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/actions/signupActions"; // Corrected import path
import "../styles/Auth.css";
import logo from "../images/logo.png";
import Navbar from "../components/Navbar";
import MiniNav from "../components/MiniNav";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure all fields are filled
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      toast.error("Please fill in all the fields.");
      return;
    }

    // Dispatch the signup action here
    dispatch(signup(formData))
      .then(() => {
        toast.loading("Authenticating");

        toast.success("Signup successful!");
        setTimeout(() => {
          navigate("/login");
        }, 3000); // Redirect to the home page after successful login
      })
      .catch((error) => {
        toast.error(error.message || "Could not sign in. Please try again.");
      });
  
  };

  return (
    <div className="body">
      <MiniNav />
      <Navbar/>
      <div className="login-container" id="signup">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Firstname:</label>
            <input
              type="text"
              className="login-input"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Lastname:</label>
            <input
              type="text"
              className="login-input"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="login-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="login-input"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="button" type="submit">
            SIGN UP
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
