import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import HeaderLight from '../../components/HeaderLight/HeaderLight';

describe('<HeaderLight />', () => {
  test('Render del componente HeaderLight', () => {
    const header = shallow(
      <ProviderMock>
        <HeaderLight />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });
  test('Render del logotipo de troud', () => {
    const header = shallow(<HeaderLight />);
    const logo = 'https://trode-s3.s3.amazonaws.com/public/troud-logotipo-negative-corporate-color.svg';
    expect(header.find('img').prop('src')).toEqual(logo);
  });
});

// describe('HeaderLight Snapshot', () => {
//   test('Comprobar la UI del HeaderLight', () => {
//     const header = create(
//       <HeaderLight />
//     )
//     expect(header.toJSON()).toMatchSnapshot();
//   })
// })
