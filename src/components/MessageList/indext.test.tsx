import React from "react";
import { render, cleanup } from "@testing-library/react";
import MessageList from "./index";

afterEach(cleanup);
describe("<MessageList />", () => {
  const requiredProps = {
    messages: [
      {
        from: "User0001",
        msg: "Hello bunny",
        time: new Date("December 17, 1995 03:24:00")
      }
    ],
    username: "Jon Johnes",
    setDynamicHeight: () => {}
  };

  it("Should render correctly", () => {
    expect(() => {
      render(<MessageList {...requiredProps} />);
    }).not.toThrow();
  });
});
