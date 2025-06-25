import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/providerMock";
import Card from "../../components/Card/Card";
import renderer, { create } from "react-test-renderer";

describe("<Card />", () => {
  test("Render del componente Card", () => {
    const card = shallow(
      <ProviderMock>
        <Card />
      </ProviderMock>
    );
    expect(card.length).toEqual(1);
  });
});
