import React from "react";
import { render, cleanup } from "@testing-library/react";

import { MessagesProvider } from "./index";

describe("Messages store", () => {
  afterEach(cleanup);

  const children = () => <div>{"children"}</div>;
  it("render Messages Provider correctly", () => {
    expect(() => {
      render(<MessagesProvider children={children} />);
    }).not.toThrow();
  });
});
