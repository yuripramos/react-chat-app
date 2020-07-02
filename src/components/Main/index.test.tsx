import React, { useContext } from "react";

import { render, cleanup } from "@testing-library/react";
import { MessagesProvider } from "../../store/Messages/index";
import Main from "./index";

afterEach(cleanup);

describe("<Main />", () => {
  const requiredProps = {
    messages: [
      {
        from: "User0001",
        msg: "Hello bunny",
        time: 3421421421
      }
    ],
    username: "Big bunnt",
    setDynamicHeight: () => {}
  };

  it("Should render correctly", () => {
    expect(() => {
      render(<Main {...requiredProps} />);
    }).not.toThrow();
  });
});
