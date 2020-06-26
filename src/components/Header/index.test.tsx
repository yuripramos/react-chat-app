import React from 'react';

import Header from './index';
import { render } from '@testing-library/react';

describe("<Header />", () => {
  it("Should render correctly", () => {
    expect(() => {
      render(<Header />);
    }).not.toThrow();
  });
});
