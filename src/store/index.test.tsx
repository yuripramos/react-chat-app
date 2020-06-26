import React from 'react';
import { render, cleanup } from "@testing-library/react";

import Store from "./index";

afterEach(cleanup);
describe("Store", () => {

  const children = () => <div>{'children'}</div>;

  it("render store", () => {
    expect(() => {
      render(<Store children={children} />);
    }).not.toThrow();
  });
});



