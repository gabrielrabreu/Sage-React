import React from "react";
import { render, fireEvent } from "@testing-library/react";

import InputNumber from "./InputNumber";

describe("InputNumber Component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <InputNumber value={0} testId="input-number" />
    );
    const inputElement = getByTestId("input-number");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders with provided value", () => {
    const value = 10;
    const { getByDisplayValue } = render(
      <InputNumber value={value} testId="input-number" />
    );
    const inputElement = getByDisplayValue(value.toString());
    expect(inputElement).toBeInTheDocument();
  });

  it("calls onChange handler with new value", () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <InputNumber value={0} onChange={onChangeMock} testId="input-number" />
    );
    const inputElement = getByTestId("input-number");
    const newValue = "15";

    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(onChangeMock).toHaveBeenCalledWith(parseFloat(newValue));
  });

  it("handles disabled state correctly", () => {
    const { getByTestId } = render(
      <InputNumber value={0} disabled testId="input-number" />
    );
    const inputElement = getByTestId("input-number") as HTMLInputElement;
    expect(inputElement.disabled).toBe(true);
  });

  it("renders with placeholder text", () => {
    const placeholder = "Enter number here...";
    const { getByPlaceholderText } = render(
      <InputNumber value={0} placeholder={placeholder} testId="input-number" />
    );
    const inputElement = getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  it("renders with minimum and maximum values", () => {
    const min = 0;
    const max = 100;
    const { getByTestId } = render(
      <InputNumber value={50} min={min} max={max} testId="input-number" />
    );
    const inputElement = getByTestId("input-number") as HTMLInputElement;
    expect(inputElement.min).toBe(min.toString());
    expect(inputElement.max).toBe(max.toString());
  });
});
