import React, {
  useContext,
  Fragment,
  useState,
  useEffect,
  useRef
} from "react";
import "./styles.scss";
import MessageList from "../MessageList/index";
import { MessagesContext } from "../../store/Messages/index";
export default () => {
  const state: any = useContext(MessagesContext);
  const [textValue, setTextValue] = useState("");

  const myStateRef = useRef(textValue);
  const setMyState = (data: any) => {
    myStateRef.current = data;
    setTextValue(data);
  };

  // persisting values with refs because listeners didn't update the last value of useState hook
  useEffect(() => {
    if (state.sendingMethod === "keypress") {
      let keysPressed: any = {};
      const listener = (event: any) => {
        keysPressed[event.key] = true;
        if (keysPressed["Control"] && keysPressed["Enter"]) {
          state.sendChatAction({
            from: state.username,
            msg: myStateRef.current,
            time: Date.now()
          });
          setMyState("");
        }
      };
      document.addEventListener("keydown", listener);
      document.addEventListener("keyup", event => {
        delete keysPressed[event.key];
      });
      return () => {
        document.removeEventListener("keydown", listener);
      };
    }
  }, []);

  return (
    <Fragment>
      <MessageList messages={state.messages} username={state.username} />
      <div className="textField">
        <textarea
          rows={4}
          cols={50}
          placeholder="type your message"
          value={textValue}
          onChange={e => setMyState(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            state.sendChatAction({
              from: state.username,
              msg: textValue,
              time: Date.now()
            });
            setMyState("");
          }}
        >
          send{" "}
        </button>
      </div>
    </Fragment>
  );
};
