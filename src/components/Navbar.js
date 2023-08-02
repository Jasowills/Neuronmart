import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Search from "./Search";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component
import "../styles/App.css";
import "../styles/Mediaqueries.css";
import { useSelector } from "react-redux";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const firstName = useSelector((state) => state.authReducer.firstname);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // State to store the cart item count

  useEffect(() => {
    // Add an event listener to handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width to define when to switch to mobileNavbar
    };

    // Set the initial state
    setIsMobile(window.innerWidth <= 768);

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fetch the cart items from localStorage and calculate the total count
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemCount(totalCount);
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  if (isMobile) {
    return (
      <div className="mobile-navbar">
        {/* Use the MobileMenu component here */}
        <MobileMenu showMobileMenu={showMobileMenu} firstName={firstName} />
      </div>
    );
  }

  return (
    <div className="navbar">
      <Link to="/" className="link">
        <h1 className="name">
          <img src={logo} alt="" />
          NeuronMart
        </h1>
      </Link>
      <nav>
        <ul>
          <Categories className="hide" />
          <Search />
          <Link className="link" to="/auth">
            <li className="list-flex">
              <span className="material-symbols-outlined">person</span> &thinsp;
              Hi, {firstName ? firstName : "Account"}
            </li>
          </Link>
          <Link className="link" to="/cart">
            <li className="list-flex hide">
              <span className="material-symbols-outlined">shopping_cart</span>
              &thinsp; Cart
              {/* Render the cart item count on top of the cart icon */}
              {cartItemCount > 0 && (
                <span className="cart-item-count">{cartItemCount}</span>
              )}
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
