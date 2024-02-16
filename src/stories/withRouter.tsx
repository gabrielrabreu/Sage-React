import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Decorator } from "@storybook/react";

export const withRouter: Decorator = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};
