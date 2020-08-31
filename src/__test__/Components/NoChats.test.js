import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import NoChats from '../../components/NoChats/NoChats';
import renderer, { create } from 'react-test-renderer';

describe('<NoChats />', () => {
  test('Render del componente NoChats', () => {
    const noChats = shallow(
      <ProviderMock>
        <NoChats />
      </ProviderMock>
    );
    expect(noChats.length).toEqual(1);
  })
})