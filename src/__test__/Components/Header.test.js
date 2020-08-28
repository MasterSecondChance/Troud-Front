import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header/Header';

describe('<Header />', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  })
  test('Render del titulo', () => {
    const header = shallow(
      <Header />
    );
    expect(header.find('.Header__Title').text()).toEqual('Trode')
  })
})