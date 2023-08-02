import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import card1 from "../images/63e8c4e71eb4ad08ebe75690_visa card 02-min.png";
import card2 from "../images/63e8c4e768e3260571e48a0c_visa card-min.png";
import card3 from "../images/63ea1a963f08a8c3dcd7c945_visa card 03.svg";

function Offer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="offer">
      <div className="offer1">
        <h2>Get 5% Cash back on $200</h2>
        <p>
          Shopping is a bit of a relaxing hobby for me,
          <br />
          which is sometimes troubling for the bank balance.
        </p>
        <div className="button-left">
          <button>Learn More</button>
        </div>
      </div>
      <div className="offer1 offer-image">
        <img src={card2} alt="" />
        <img src={card1} alt="" />
        {/* <img src={card3}  alt="" /> */}
      </div>
    </div>
  );
}

export default Offer;
