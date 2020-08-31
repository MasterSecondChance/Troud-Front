import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import MyClothes from '../../components/MyClothes/MyClothes';

describe('<MyClothes />', () => {
  test('Render del componente My Clothes', () => {
    const myClothes = shallow(
      <ProviderMock>
        <MyClothes />
      </ProviderMock>,
    );
    expect(myClothes.length).toEqual(1);
  });
});
