import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

import HeroSection from "./HeroSection";

describe("HeroSection Component", () => {
  it("renders title correctly", () => {
    const title = "Welcome to the Dashboard";
    const testId = "hero-section";
    const { getByTestId } = render(
      <HeroSection title={title} breadcrumb={[]} testId={testId} />
    );

    expect(getByTestId(testId)).toBeInTheDocument();
    expect(getByTestId(testId)).toHaveTextContent(title);
  });

  it("renders breadcrumb correctly", () => {
    const breadcrumb = [
      { name: "Home", link: "/" },
      { name: "Dashboard", link: "/dashboard" },
    ];
    const testId = "hero-section";
    const { getByText } = render(
      <Router>
        <HeroSection title="Dash" breadcrumb={breadcrumb} testId={testId} />
      </Router>
    );

    breadcrumb.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
    });
  });
});
