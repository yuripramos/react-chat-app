import React from "react";
import Store from "../../store/index";
import { render, cleanup } from "@testing-library/react";
import Main from "./index";

afterEach(cleanup);

describe("<Main />", () => {
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
