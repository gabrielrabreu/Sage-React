import React from "react";
import { render, fireEvent } from "@testing-library/react";

import DatePicker from "./DatePicker";

describe("DatePicker Component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <DatePicker onChange={() => {}} testId="datepicker" />
    );
    const datePickerElement = getByTestId("datepicker");
    expect(datePickerElement).toBeInTheDocument();
  });

  it("calls onChange handler with new date", () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <DatePicker onChange={onChangeMock} testId="datepicker" />
    );
    const datePickerElement = getByTestId("datepicker");
    const newDate = "2024-12-01";

    fireEvent.change(datePickerElement, { target: { value: newDate } });
    expect(onChangeMock).toHaveBeenCalledWith(new Date(newDate));
  });

  it("renders with provided value", () => {
    const value = new Date("2024-12-01");
    const { getByDisplayValue } = render(
      <DatePicker value={value} onChange={() => {}} testId="datepicker" />
    );
    const datePickerElement = getByDisplayValue(
      value.toISOString().split("T")[0]
    );
    expect(datePickerElement).toBeInTheDocument();
  });
});
