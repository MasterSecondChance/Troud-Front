import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import SecondStep from '../../components/Sign/SecondStep';

describe('<SecondStep />', () => {
  test('Render del componente del segundo paso', () => {
    const secondStep = shallow(
        <ProviderMock>
          <SecondStep />
        </ProviderMock>
      );
      expect(secondStep.length).toEqual(1);
    })
})