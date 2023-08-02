import React, { useState, useEffect } from "react";
import Search from "./Search";
import "../styles/App.css";
import "../styles/Mediaqueries.css";
import { useSelector } from "react-redux";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import OffcanvasMenu from "./Offcanvas";

function MobileNavbar() {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemCount(totalCount);
  }, []);
  const firstName = useSelector((state) => state.authReducer.firstname);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <div className="navbar column">
      <div className="mobile-wrap">
        &nbsp;
        <i className="fa fa-bars" onClick={toggleOffcanvas}></i>
        &nbsp; &nbsp;
        <Link to="/" className="link">
          <h1 className="name">
            <img src={logo} alt="" />
            NeuronMart
          </h1>
        </Link>
        <nav className="mobile-list">
          <ul>
            <Link className="link" to="/auth">
              <li className="list-flex mobile-list-type">
                <span className="material-symbols-outlined">person</span>{" "}
                &thinsp;
              </li>
            </Link>
            <Link className="link" to="/cart">
              <li className="list-flex hide">
                <span className="material-symbols-outlined">shopping_cart</span>
                &thinsp; 
                {/* Render the cart item count on top of the cart icon */}
                {cartItemCount > 0 && (
                  <span className="cart-item-count">{cartItemCount}</span>
                )}
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <Search />
      {showOffcanvas && (
        <OffcanvasMenu
          showOffcanvas={showOffcanvas}
          toggleOffcanvas={toggleOffcanvas}
        />
      )}
    </div>
  );
}

export default MobileNavbar;
