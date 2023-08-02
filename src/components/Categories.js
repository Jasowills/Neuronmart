import React, { useState } from "react";
import "../styles/App.css";
import "animate.css";
import gaming from "../images/ps51.png";
import electronics from "../images/hisensee.png";
import phone from "../images/product4.png";
import appliance from "../images/kettle1.png";
import fashion from "../images/wig3.png";
import health from "../images/cream6.png";
import { Link } from "react-router-dom";
function Categories() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isIconRotated, setIconRotated] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
    setIconRotated(!isIconRotated);
  };

  return (
    <li className="list-flex border" onClick={handleDropdownToggle}>
      <span
        className={`material-symbols-outlined ${
          isIconRotated ? "rotate-icon" : ""
        }`}
        id="rotate"
      >
        category
      </span>
      &thinsp; <span className="hide">Categories</span>
      {isDropdownVisible && (
        <div className="dropdown-container">
          <h3 className="animate__animated animate__fadeInLeft">
            Popular Categories
          </h3>
          <hr />
          <div className="categories">
            <ul className="animate__animated animate__fadeInDown">
              <Link className="link" to="/electronics">
                <li>
                  <img src={electronics} alt="" />
                  &thinsp;&thinsp; Electronics
                </li>
              </Link>
              <Link className="link" to="/phones&tablets">
                <li>
                  <img src={phone} alt="" />
                  &thinsp;&thinsp;Phones & Tablets
                </li>
              </Link>
              <Link className="link" to="/health&beauty">
                <li>
                  <img src={health} alt="" />
                  &thinsp;Health & Beauty
                </li>
              </Link>
              <Link className="link" to="/appliances">
                <li>
                  <img src={appliance} alt="" />
                  &thinsp;&thinsp;Appliances
                </li>
              </Link>
              <Link className="link" to="/gaming">
                <li>
                  <img src={gaming} alt="" />
                  &thinsp;&thinsp;Gaming
                </li>
              </Link>{" "}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}

export default Categories;
