import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Inbox from "../../pages/Inbox";

// Mock the child components to avoid complex dependencies
jest.mock("../../components/Header/Header", () => {
  return function MockHeader() {
    return <div data-testid="header">Header Component</div>;
  };
});

jest.mock("../../components/ListOfMessages/ListOfMessages", () => {
  return function MockListOfMessages() {
    return <div data-testid="list-of-messages">List Of Messages Component</div>;
  };
});

describe("<Inbox />", () => {
  test("Render del componente Inbox", () => {
    render(
      <BrowserRouter>
        <Inbox />
      </BrowserRouter>
    );

    // Inbox renders without crashing
    expect(true).toBe(true);
  });
});
