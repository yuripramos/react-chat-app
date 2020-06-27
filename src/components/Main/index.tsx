import React, { useContext, Fragment, useState } from "react";
import "./styles.scss";
import MessageList from "../MessageList/index";
import { MessagesContext } from "../../store/Messages/index";
export default () => {
  const state: any = useContext(MessagesContext);

  const [textValue, setTextValue] = useState("");

  return (
    <Fragment>
      <MessageList messages={state.messages} />
      <div className="textField">
        <input
          type="text"
          placeholder="type your message"
          value={textValue}
          onChange={e => setTextValue(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            state.sendChatAction({ from: "", msg: textValue });
            setTextValue("");
          }}
        >
          {" "}
          send{" "}
        </button>
      </div>
    </Fragment>
  );
};
