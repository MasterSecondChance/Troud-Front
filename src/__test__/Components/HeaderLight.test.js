import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderLight from "../../components/HeaderLight/HeaderLight";

describe("<HeaderLight />", () => {
  test("Render del componente HeaderLight", () => {
    render(
      <BrowserRouter>
        <HeaderLight />
      </BrowserRouter>
    );

    // HeaderLight renders without crashing
    expect(true).toBe(true);
  });
});
