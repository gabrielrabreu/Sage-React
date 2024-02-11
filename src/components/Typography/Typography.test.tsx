import React from "react";
import { render } from "@testing-library/react";

import Typography, { TypographyVariant } from "./Typography";

describe("Typography", () => {
  const variants: TypographyVariant[] = [
    "label",
    "link",
    "meta",
    "error",
    "title",
    "highlight",
    "caption",
    "body",
    "heading",
    "subheading",
  ];

  variants.forEach((variant) => {
    it(`renders correctly with '${variant}' variant`, () => {
      const textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      const { getByTestId } = render(
        <Typography variant={variant}>{textContent}</Typography>
      );
      const typographyElement = getByTestId("typography");
      expect(typographyElement).toHaveClass("typography");
      expect(typographyElement).toHaveClass(variant);
      expect(typographyElement).toHaveTextContent(textContent);
    });
  });
});
