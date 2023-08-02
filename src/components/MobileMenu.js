import React, { useState } from "react";
import Categories from "./Categories";
import Search from "./Search";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component
import "../styles/App.css";
import "../styles/Mediaqueries.css";
import { useSelector } from "react-redux";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function MobileNavbar() {
  const firstName = useSelector((state) => state.authReducer.firstname);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="navbar column">
      <div className="mobile-wrap">
        &nbsp;
        <i className="fa fa-bars"></i>
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
                <span class="material-symbols-outlined">person</span> &thinsp;
              </li>
            </Link>
            <Link className="link" to="/cart">
              <li className="list-flex mobile-list-type">
                <span class="material-symbols-outlined">shopping_cart</span>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <Search />
    </div>
  );
}

export default MobileNavbar;
