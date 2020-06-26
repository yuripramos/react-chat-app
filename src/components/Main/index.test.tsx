import React, { useContext } from "react";

import { render, cleanup } from "@testing-library/react";
import { MessagesProvider } from "../../store/Messages/index";
import Main from "./index";

afterEach(cleanup);

describe("<Main />", () => {
  it("Should render correctly", () => {
    expect(() => {
      render(<MessagesProvider children={<Main />} />);
    }).not.toThrow();
  });
});
