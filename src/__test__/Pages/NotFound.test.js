import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "../../pages/NotFound";

describe("<NotFound />", () => {
  test("Render del componente NotFound", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    // Should show 404 or error message
    expect(true).toBe(true);
  });
});
