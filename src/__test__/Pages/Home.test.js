import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/providerMock";
import Home from "../../pages/Home";
import renderer, { create } from "react-test-renderer";

describe("<Home />", () => {
  test("Render del componente Home", () => {
    const home = shallow(
      <ProviderMock>
        <Home />
      </ProviderMock>
    );
    expect(home.length).toEqual(1);
  });
});
