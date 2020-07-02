import React from "react";
import Store from "../../store/index";
import { render, cleanup } from "@testing-library/react";
import Main from "./index";

afterEach(cleanup);

describe("<Main />", () => {
  const store = {
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
      render(
        <Store>
          <Main />
        </Store>
      );
    }).not.toThrow();
  });
});
