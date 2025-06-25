import { render } from "@testing-library/react";
import React from "react";
import Hero from "../../components/Hero/Hero";

describe("<Hero />", () => {
  test("Render del componente Hero", () => {
    render(<Hero />);

    // Hero renders without crashing
    expect(true).toBe(true);
  });
});
