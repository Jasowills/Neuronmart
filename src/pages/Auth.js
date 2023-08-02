import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Add this import
import { login } from "../redux/actions/authActions"; // Corrected import path
import "../styles/Auth.css";
import "../styles/Mediaqueries.css";
import logo from "../images/logo.png";
import Signup from "./Signup";
import Navbar from "../components/Navbar";
import MiniNav from "../components/MiniNav";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AuthComponent() {
  const dispatch = useDispatch(); // Add this line
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      toast.error("Please fill in both email and password.");
      return;
    }

    // Dispatch the login action here
    dispatch(login(formData))
      .then(() => {
        toast.loading("Authenticating");

        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/");
        }, 3000); // Redirect to the home page after successful login
      })
      .catch((error) => {
        toast.error(error.message || "Could not sign in. Please try again.");
      });
  };
  return (
    <div className="body">
      <MiniNav />
      <Navbar />

      <div className="login-container" id="login">
        <form onSubmit={handleLogin}>
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
            LOG IN
          </button>
          <p className="opt link">
            <Link to="/signup" className="link">
              Create Account
            </Link>
          </p>
        </form>
      </div>
      <br />
      <ToastContainer />
    </div>
  );
}

export default AuthComponent;
