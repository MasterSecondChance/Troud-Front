import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/Header/Header";

// Mock the API calls
jest.mock("../../../api", () => ({
  getMatchByPhone: jest.fn().mockResolvedValue({
    data: { data: [] },
  }),
}));

describe("<Header />", () => {
  test("Render del componente Header", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Header renders without crashing
    expect(true).toBe(true);
  });
});

//describe('Header Snapshot', () => {
//  test('Comprobar la UI del Header', () => {
//    const header = create(
//      <ProviderMock>
//        <Header />
//      </ProviderMock>
//    )
//    expect(header.toJSON()).toMatchSnapshot();
//  })
//})
