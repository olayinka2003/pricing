import { GiCancel } from "react-icons/gi"; 
import { GiHamburgerMenu } from "react-icons/gi";

import React, { useState } from "react";

export const Nav = () => {
  const [active, setIsActive] = useState(false);
    const handleClick = ()=>{
      setIsActive(fa=>!fa);
    }
  return (
    <>
      <nav>
        <div>
          <img src="Home.svg" alt="" /> <p>HOMEK</p>
        </div>
        <div className="goo">
          <li>About</li>
          <li>Speakers</li>
          <li>Tickets</li>
          <li>Membership</li>
        </div>

        <button>
          Get your ticket <img src="arrow.svg" alt="" />
        </button>
        <GiHamburgerMenu onClick={handleClick} className="menu" />
      </nav>

    { active &&  <div className="sidebar">
        <GiCancel onClick={handleClick} className="cancel"/>
        <ul>
        <li>About</li>
        <li>Speakers</li>
        <li>Tickets</li>
        <li>Membership</li>
        </ul>
        <button>
          Get your ticket <img src="arrow.svg" alt="" />
        </button>
      </div>
}    </>
  );
};
