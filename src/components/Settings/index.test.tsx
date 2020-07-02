import React from "react";
import { render, cleanup } from "@testing-library/react";
import Settings from "./index";

afterEach(cleanup);

describe("<Settings />", () => {
  const requiredProps = {
    changeTheme: () => {}
  };

  it("Should render correctly", () => {
    expect(() => {
      render(<Settings {...requiredProps} />);
    }).not.toThrow();
  });
});
