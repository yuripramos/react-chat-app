import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Tabs from "./index";
import { BrowserRouter } from "react-router-dom";
afterEach(cleanup);

describe("<Tabs />", () => {
  it("Should render correctly", () => {
    expect(() => {
      render(
        <BrowserRouter>
          <Tabs />
        </BrowserRouter>
      );
    }).not.toThrow();
  });
  it("Tabs defined", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Tabs />
      </BrowserRouter>
    );

    expect(getByTestId("menu")).toBeDefined();
  });
});
