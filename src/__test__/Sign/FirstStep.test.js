import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/providerMock";
import FirstStep from "../../components/Sign/FirstStep";
import SecondStep from "../../components/Sign/SecondStep";

describe("<FirstStep />", () => {
  test("Render del componente del primer paso", () => {
    const firstStep = shallow(
      <ProviderMock>
        <FirstStep />
      </ProviderMock>
    );
    expect(firstStep.length).toEqual(1);
  }); /*
    test('Comprobar el boton de continuar', () => {
      const next = jest.fn();
      const wrapper = mount(
        <ProviderMock>
          <SecondStep
            step={SecondStep}
            next={next}
          />
        </ProviderMock>,
      );
      wrapper.find('button').simulate('click');
      expect(next).toHaveBeenCalledTimes(1);
    });*/
});
