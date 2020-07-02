import React from "react";
import { render, cleanup } from "@testing-library/react";
import Message from "./index";

afterEach(cleanup);

describe("<Message />", () => {
  const requiredProps = {
    username: "John Fleck",
    data: {
      from: "Yuri Ramos",
      msg: "An message is being received",
      time: new Date()
    }
  };

  it("Should render correctly", () => {
    expect(() => {
      render(<Message {...requiredProps} />);
    }).not.toThrow();
  });
});
