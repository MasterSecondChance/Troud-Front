import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import renderer, { create } from 'react-test-renderer';
import EditClothes from '../../components/EditClothes/EditClothes';

describe('<EditClothes />', () => {
  test('Render del componente Category', () => {
    const editClothes = shallow(
      <ProviderMock>
        <EditClothes />
      </ProviderMock>
    );
    expect(editClothes.length).toEqual(1);
  })
})