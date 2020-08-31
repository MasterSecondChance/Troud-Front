import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer, { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header/Header';

describe('<Header />', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });
  test('Render del logotipo de troud', () => {
    const header = shallow(<Header />);
    const logo = 'https://trode-s3.s3.amazonaws.com/public/troud-logotipo-negative-corporate-color.svg';
    expect(header.find('img').prop('src')).toEqual(logo);
  });
  test('Render de 4 opciones de menu', () => {
    const header = shallow(<Header />);
    expect(header.find('li').length).toEqual(4);
  });
});

//describe('Header Snapshot', () => {
//  test('Comprobar la UI del Header', () => {
//    const header = create(
//      <ProviderMock>
//        <Header />
//      </ProviderMock>
//    )
//    expect(header.toJSON()).toMatchSnapshot();
//  })
//})
