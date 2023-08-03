import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTimes, faColumns } from "@fortawesome/free-solid-svg-icons";
import gaming from "../images/ps51.png";
import electronics from "../images/hisensee.png";
import phone from "../images/product4.png";
import appliance from "../images/kettle1.png";
import fashion from "../images/wig3.png";
import health from "../images/cream6.png";
import "animate.css";
function OffcanvasMenu({ showOffcanvas, toggleOffcanvas }) {
  const [isIconRotated, setIconRotated] = useState(false);

  return (
    <div className="offcanvas animate__animated animate__fadeInLeft">
      <div className="offcanvas-content">
        <div className="offcanvas-aside">
          <div className="offcanvas-wrap">
            <h3 className="text-align">
              <span
                className={`material-symbols-outlined ${
                  isIconRotated ? "rotate-icon" : ""
                }`}
                id="rotate"
              >
                category
              </span>
              &thinsp; <span className="">Categories</span>
            </h3>
            <button className="close-button" onClick={toggleOffcanvas}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <ul className="" id="category-ul">
            <Link className="link" to="/electronics">
              <li>
                &thinsp;
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
    </div>
  );
}

export default OffcanvasMenu;
