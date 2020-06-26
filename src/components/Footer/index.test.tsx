import React from 'react';

import { render } from '@testing-library/react';
import Footer from './index';



describe("<Footer />", () => {
  it("check a href click link text", () => {
    const { getByText } = render(<Footer />);

    expect(getByText('@yuripramos')).toBeDefined();
  });
});
