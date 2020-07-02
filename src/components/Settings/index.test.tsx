import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
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

  it("change to dark theme", () => {
    const { getByLabelText } = render(<Settings {...requiredProps} />);

    const radio = getByLabelText("💡") as HTMLInputElement;

    fireEvent.change(radio, { target: { value: "dark" } });

    expect(radio.value).toBe("dark");
  });

  it("change Clock Display", () => {
    const { getByLabelText } = render(<Settings {...requiredProps} />);

    const radio = getByLabelText("12 Hours") as HTMLInputElement;

    fireEvent.change(radio, { target: { value: "24H" } });

    expect(radio.value).toBe("24H");
  });

  it("change send message mode", () => {
    const { getByLabelText } = render(<Settings {...requiredProps} />);

    const radio = getByLabelText("On") as HTMLInputElement;

    fireEvent.change(radio, { target: { value: "off" } });

    expect(radio.value).toBe("off");
  });
});
