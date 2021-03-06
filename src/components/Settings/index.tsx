import React, { useContext, Fragment, useState } from "react";
import { MessagesContext } from "../../store/Messages/index";
import { ThemeContext } from "../../contexts/theme/index";
import "./styles.scss";

interface Props {
  changeTheme: (color: string) => void;
}
export default ({ changeTheme }: Props) => {
  const state: any = useContext(MessagesContext);
  const theme: any = useContext(ThemeContext);

  return (
    <section className="settings">
      <div className="option-wrapper">
        <p className="settings-title">Username</p>
        <input
          type="text"
          name="username"
          placeholder="type your username"
          value={state.username}
          onChange={e => state.setUsername(e.target.value)}
        />
      </div>
      <div className="option-wrapper">
        <p className="settings-title">Interface color</p>
        <input
          type="radio"
          id="theme1"
          name="theme"
          value="light"
          checked={theme === "light"}
          data-testid="light"
          onChange={() => changeTheme("light")}
        />
        <label htmlFor="theme1">💡</label>
        <input
          type="radio"
          id="theme2"
          name="theme"
          value="dark"
          data-testid="dark"
          checked={theme === "dark"}
          onChange={() => changeTheme("dark")}
        />
        <label htmlFor="theme2">🔦</label>
      </div>
      <div className="option-wrapper">
        <p className="settings-title">Clock Display</p>
        <input
          type="radio"
          id="timeFormat1"
          name="timeFormat"
          checked={state.format === "12H"}
          onChange={() => state.setTimeFormat("12H")}
          value="12H"
        />
        <label htmlFor="timeFormat1">12 Hours</label>
        <input
          type="radio"
          id="timeFormat2"
          name="timeFormat"
          value="24H"
          checked={state.format === "24H"}
          onChange={() => state.setTimeFormat("24H")}
        />
        <label htmlFor="timeFormat2">24 Hours</label>
      </div>
      <div className="option-wrapper">
        <p className="settings-title">Send messages on CTRL + ENTER</p>
        <input
          type="radio"
          id="msgsendtype1"
          name="msgsendtype"
          value="on"
          checked={state.sendingMethod === "keypress"}
          onChange={() => state.setSendingMethod("keypress")}
        />
        <label htmlFor="msgsendtype1">On</label>
        <input
          type="radio"
          id="msgsendtype2"
          name="msgsendtype"
          value="off"
          checked={state.sendingMethod === "submit"}
          onChange={() => state.setSendingMethod("submit")}
        />
        <label htmlFor="msgsendtype2">Off</label>
      </div>
    </section>
  );
};
