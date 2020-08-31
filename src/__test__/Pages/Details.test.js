import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Details from '../../pages/Details';
import renderer, { create } from 'react-test-renderer';

describe('<Details />', () => {
  test('Render del componente Details', () => {
    const details = shallow(
      <ProviderMock>
        <Details />
      </ProviderMock>
    );
    expect(details.length).toEqual(1);
  })
})