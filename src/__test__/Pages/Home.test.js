import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "../../pages/Home";

// Mock the child components to avoid complex dependencies
jest.mock("../../components/Header/Header", () => {
  return function MockHeader() {
    return <div data-testid="header">Header Component</div>;
  };
});

jest.mock("../../components/Categories/Category", () => {
  return function MockCategory() {
    return <div data-testid="category">Category Component</div>;
  };
});

jest.mock("../../components/Card/Card", () => {
  return function MockCard() {
    return <div data-testid="card">Card Component</div>;
  };
});

describe("<Home />", () => {
  test("Render del componente Home", () => {
    render(<Home />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("category")).toBeInTheDocument();
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
