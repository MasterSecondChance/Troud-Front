import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import HeaderLight from '../../components/HeaderLight/HeaderLight';
import renderer, { create } from 'react-test-renderer';

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

// describe('HeaderLight Snapshot', () => {
//   test('Comprobar la UI del HeaderLight', () => {
//     const header = create(
//       <HeaderLight />
//     )
//     expect(header.toJSON()).toMatchSnapshot();
//   })
// })
