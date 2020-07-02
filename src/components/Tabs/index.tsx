import React, { useContext } from "react";
import "./styles.scss";
import { MessagesContext } from "../../store/Messages/index";
import { NavLink, BrowserRouter } from "react-router-dom";

const activeStyle = {
  borderBottom: "solid 2px rgb(187, 46, 31)",
  fontStyle: "italic"
};
const Tabs = () => {
  const state: any = useContext(MessagesContext);
  const newMessagesTab = state.isUnreadMessages && "blink";

  return (
    <ul className="tabs" data-testid="menu">
      <li className={newMessagesTab}>
        {" "}
        <NavLink
          to="/"
          exact
          activeStyle={activeStyle}
          onClick={() => state.setUnreadMessage(false)}
        >
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
