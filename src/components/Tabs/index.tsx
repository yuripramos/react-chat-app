import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const activeStyle = {
  borderBottom: "solid 2px rgb(187, 46, 31)",
  fontStyle: "italic"
};
const Tabs = () => {
  return (
    <ul className="tabs">
      <li>
        {" "}
        <NavLink to="/" exact activeStyle={activeStyle}>
          Chat
        </NavLink>
      </li>
      <li>
        <NavLink to="/settings" exact activeStyle={activeStyle}>
          Settings
        </NavLink>
      </li>
    </ul>
  );
};

export default Tabs;
