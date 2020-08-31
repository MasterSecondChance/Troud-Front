import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import ThirdStep from '../../components/Sign/ThirdStep';

describe('<ThirdStep />', () => {
  test('Render del componente del tercer paso', () => {
    const thirdStep = shallow(
        <ProviderMock>
          <ThirdStep />
        </ProviderMock>
      );
      expect(thirdStep.length).toEqual(1);
    })
})