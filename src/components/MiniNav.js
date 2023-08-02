import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../styles/App.css";
import "../styles/Mediaqueries.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

function MiniNav() {
    return (
      <div className="mini-nav">
    
          <ul>
            <li>
              <FontAwesomeIcon icon="phone" />
                    &thinsp; +2349134551849{" "}
            </li>
            <li>Get 50% off on Selected Items | Shop Now</li>
            <li> ENG</li>
          </ul>
      </div>
    );
}

export default MiniNav;