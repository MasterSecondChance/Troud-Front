import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import renderer, { create } from 'react-test-renderer';
import Confirm from '../../components/Sign/Confirm';

describe('<Confirm />', () => {
  test('Render del componente Confirm', () => {
    const confirm = shallow(
      <ProviderMock>
        <Confirm />
      </ProviderMock>
    );
    expect(confirm.length).toEqual(1);
  })
  test('Render de 2 tarjetas principales', () => {
    const confirm = shallow(
      <ProviderMock>
        <Confirm />
      </ProviderMock>
    );
    expect(confirm.find('.Confirm__Card').length).toEqual(2);
  })
  test('Render de 14 item de confirmacion', () => {
    const confirm = shallow(
      <ProviderMock>
        <Confirm />
      </ProviderMock>
    );
    expect(confirm.find('.Confirm__Card__Item--title').length).toEqual(14);
  })
})