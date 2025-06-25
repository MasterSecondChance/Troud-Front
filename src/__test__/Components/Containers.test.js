import { render } from "@testing-library/react";
import React from "react";
import Containers from "../../components/Containers/Containers";

describe("<Containers />", () => {
  test("Render del componente Containers", () => {
    render(
      <Containers>
        <div>Test Content</div>
      </Containers>
    );

    // Containers renders without crashing
    expect(true).toBe(true);
  });
});
