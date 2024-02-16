import React from "react";
import { render, fireEvent } from "@testing-library/react";

import InputText from "./InputText";

describe("InputText Component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<InputText value="" testId="input-text" />);
    const inputElement = getByTestId("input-text");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders with provided value", () => {
    const value = "Test Value";
    const { getByDisplayValue } = render(
      <InputText value={value} testId="input-text" />
    );
    const inputElement = getByDisplayValue(value);
    expect(inputElement).toBeInTheDocument();
  });

  it("calls onChange handler with new value", () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <InputText value="" onChange={onChangeMock} testId="input-text" />
    );
    const inputElement = getByTestId("input-text");
    const newValue = "New Value";

    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(onChangeMock).toHaveBeenCalledWith(newValue);
  });

  it("handles disabled state correctly", () => {
    const { getByTestId } = render(
      <InputText value="" disabled testId="input-text" />
    );
    const inputElement = getByTestId("input-text") as HTMLInputElement;
    expect(inputElement.disabled).toBe(true);
  });

  it("renders with placeholder text", () => {
    const placeholder = "Enter text here...";
    const { getByPlaceholderText } = render(
      <InputText value="" placeholder={placeholder} testId="input-text" />
    );
    const inputElement = getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  it("renders with maximum length", () => {
    const maxLength = 10;
    const { getByTestId } = render(
      <InputText value="" maxLength={maxLength} testId="input-text" />
    );
    const inputElement = getByTestId("input-text") as HTMLInputElement;
    expect(inputElement.maxLength).toBe(maxLength);
  });
});
