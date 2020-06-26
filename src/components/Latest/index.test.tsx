import React from 'react';
import Latest from './index';
import { render, act, fireEvent } from '@testing-library/react';

describe("<Latest />", () => {
  let props = {
    data: {
      title: "An mocked title",
      metadata: {
        authorId: "Jeremy Bastard",
        publishedAt: "2132121"
      }
    },
    handleClick: jest.fn()
  }


  it("Should render correctly", () => {
    expect(() => {
      render(<Latest {...props} />);
    }).not.toThrow();
  });

  it('handleClick defined', () => {
    const { getByTestId } = render(<Latest {...props} />);

    act(() => {
      fireEvent.click(getByTestId('latest'));
    });

    expect(props.handleClick).toBeDefined()
  });
});
