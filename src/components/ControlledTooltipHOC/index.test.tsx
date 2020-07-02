import React, { useState } from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { withControlledTooltip } from "../ControlledTooltipHOC";

const WrapperComponent = () => {
  const [visible, setVisible] = useState(false);
  const ComponentWithTooltip = withControlledTooltip(CustomComponent);

  return (
    //eslint-disable-next-line
    <div>
      <button onClick={() => setVisible(!visible)}>{"toggle"}</button>
      <ComponentWithTooltip
        visible={visible}
        renderTooltip={() => <CustomTooltip />}
      />
    </div>
  );
};

const CustomComponent = () => <span>{"Custom component for HOC testing"}</span>;

const CustomTooltip = () => <div>{"Tooltip"}</div>;

describe("ControlledTooltipHOC", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    expect(() => {
      render(<WrapperComponent />);
    }).not.toThrow();
  });

  it("renders the wrapped component, hides tooltip", () => {
    const { queryByText } = render(<WrapperComponent />);
    expect(queryByText("Custom component for HOC testing")).toBeTruthy();
    expect(queryByText("Tooltip")).toBeFalsy();
  });

  it("renders the tooltip when the visible flag is true", () => {
    const { getByText, queryByText } = render(<WrapperComponent />);

    fireEvent.click(getByText("toggle"));

    expect(queryByText("Tooltip")).toBeTruthy();
  });
});
