import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import HeaderLight from '../../components/HeaderLight/HeaderLight';

describe('<HeaderLight />', () => {
  test('Render del componente HeaderLight', () => {
    const header = shallow(
      <ProviderMock>
        <HeaderLight />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  })
  test('Render del titulo', () => {
    const header = shallow(
      <HeaderLight />
    );
    expect(header.find('.HeaderLight__Title').text()).toEqual('Trode')
  })
})