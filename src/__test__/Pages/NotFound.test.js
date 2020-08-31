import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import NotFound from '../../pages/NotFound';
import renderer, { create } from 'react-test-renderer';

describe('<NotFound />', () => {
  test('Render del componente NotFound', () => {
    const notFound = shallow(
      <ProviderMock>
        <NotFound />
      </ProviderMock>
    );
    expect(notFound.length).toEqual(1);
  })
})