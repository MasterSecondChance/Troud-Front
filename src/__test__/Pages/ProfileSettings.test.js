import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProfileSettings from "../../pages/ProfileSettings";

// Mock the child components to avoid complex dependencies
jest.mock("../../components/Header/Header", () => {
  return function MockHeader() {
    return <div data-testid="header">Header Component</div>;
  };
});

jest.mock("../../components/ProfilePersonal/ProfilePersonal", () => {
  return function MockProfilePersonal() {
    return <div data-testid="profile-personal">Profile Personal Component</div>;
  };
});

describe("<ProfileSettings />", () => {
  test("Render del componente ProfileSettings", () => {
    render(
      <BrowserRouter>
        <ProfileSettings />
      </BrowserRouter>
    );

    // ProfileSettings renders without crashing
    expect(true).toBe(true);
  });
});
