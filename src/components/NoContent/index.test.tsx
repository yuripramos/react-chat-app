import React from "react";

import { render, cleanup } from "@testing-library/react";
import NoContent from "./index";

afterEach(cleanup);

describe("<NoContent />", () => {
  it("Should render correctly", () => {
    expect(() => {
      render(<NoContent />);
    }).not.toThrow();
  });
});
