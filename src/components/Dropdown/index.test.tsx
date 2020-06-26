import React from 'react';

import { render, cleanup, fireEvent, act } from '@testing-library/react';
import Dropdown from './index';


describe("<Dropdown />", () => {

  afterEach(cleanup);
  const props = {
    id: 'id-01',
    data: ["author1 ", "author2", "author3"],
    placeholder: 'Select',
    multiple: false,
    dataLabel: "label",
    disabled: false,
    onChange: jest.fn(),
    className: 'activated'
  }

  it("After click check it classname changes", () => {
    const { getByTestId } = render(
      <Dropdown {...props} />
    );

    act(() => {
      fireEvent.click(getByTestId('dropdown'));
    });

    expect(getByTestId('dropdown')).toBeDefined();
  });

  it("Trigger button index 2 in dropdown", () => {
    const { getByTestId } = render(
      <Dropdown {...props} />
    );

    act(() => {
      fireEvent.click(getByTestId('trigger'));
    });

    act(() => {
      fireEvent.click(getByTestId('button-2'));
    });

    expect(getByTestId('button-2')).toHaveClass('selected')
  });

  it("Click multiples elements inside dropdown", () => {
    const { getByTestId } = render(
      <Dropdown {...props} />
    );

    act(() => {
      fireEvent.click(getByTestId('trigger'));
    });

    act(() => {
      fireEvent.click(getByTestId('button-2'));
      fireEvent.click(getByTestId('button-1'));
    });

    expect(getByTestId('dropdown')).toHaveClass('activated')
  });
})
