import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import SignIn from "../../pages/SignIn";

// Mock the API calls
jest.mock("../../../api", () => ({
  userLogin: jest.fn().mockResolvedValue({
    user: { _id: "test-id", phone: "1234567890test" },
    access_token: "test-token",
    articles: 1,
  }),
  getUsers: jest.fn().mockResolvedValue([]),
}));

// Mock HeaderLight component
jest.mock("../../components/HeaderLight/HeaderLight", () => {
  return function MockHeaderLight() {
    return <div data-testid="header-light">Header Light</div>;
  };
});

describe("<SignIn />", () => {
  test("Render del componente SignIn", () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );

    // SignIn renders without crashing
    expect(true).toBe(true);
  });
});
