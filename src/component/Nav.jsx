import React from "react";

export const Nav = () => {
  return (
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

      <button>Get your ticket <img src="arrow.svg" alt="" /></button>
    </nav>
  );
};
