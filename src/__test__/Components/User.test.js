import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import User from '../../components/User/User';
import renderer, { create } from 'react-test-renderer';

describe('<User />', () => {
  test('Render del componente User', () => {
    const user = shallow(
      <ProviderMock>
        <User />
      </ProviderMock>
    );
    expect(user.length).toEqual(1);
  })
})