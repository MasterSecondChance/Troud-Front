import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/providerMock";
import FourthStep from "../../components/Sign/FourthStep";

describe("<FourthStep />", () => {
  test("Render del componente del cuarto paso", () => {
    const fourthStep = shallow(
      <ProviderMock>
        <FourthStep />
      </ProviderMock>
    );
    expect(fourthStep.length).toEqual(1);
  });
});
