import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import UploadClothe from "../../pages/UploadClothe";

// Mock the child components to avoid complex dependencies
jest.mock("../../components/Header/Header", () => {
  return function MockHeader() {
    return <div data-testid="header">Header Component</div>;
  };
});

jest.mock("../../components/UploadClothes/UploadClothes", () => {
  return function MockUploadClothes() {
    return <div data-testid="upload-clothes">Upload Clothes Component</div>;
  };
});

describe("<UploadClothe />", () => {
  test("Render del componente UploadClothe", () => {
    render(
      <BrowserRouter>
        <UploadClothe />
      </BrowserRouter>
    );

    // UploadClothe renders without crashing
    expect(true).toBe(true);
  });
});
