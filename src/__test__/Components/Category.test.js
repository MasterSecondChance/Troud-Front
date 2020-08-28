import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Category from '../../components/Categories/Category';
import renderer, { create } from 'react-test-renderer';

describe('<Category />', () => {
  test('Render del componente Category', () => {
    const header = shallow(
      <ProviderMock>
        <Category />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  })
})