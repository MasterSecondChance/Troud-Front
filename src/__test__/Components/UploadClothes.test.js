import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import UploadClothes from '../../components/UploadClothes/UploadClothes';
import renderer, { create } from 'react-test-renderer';

describe('<UploadClothes />', () => {
  test('Render del componente UploadClothes', () => {
    const uploadClothes = shallow(
      <ProviderMock>
        <UploadClothes />
      </ProviderMock>
    );
    expect(uploadClothes.length).toEqual(1);
  })
})