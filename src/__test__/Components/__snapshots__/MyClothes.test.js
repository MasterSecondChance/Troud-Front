import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer, { create } from 'react-test-renderer';
import ProviderMock from '../../../__mocks__/providerMock';
import MyClothes from '../../../components/MyClothes/MyClothes';

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