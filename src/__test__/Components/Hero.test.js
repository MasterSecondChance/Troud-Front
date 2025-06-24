import { shallow } from 'enzyme';
import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/providerMock';
import Hero from '../../components/Hero/Hero';

describe('<Hero />', () => {
  test('Render del componente Hero', () => {
    const hero = shallow(
      <ProviderMock>
        <Hero />
      </ProviderMock>,
    );
    expect(hero.length).toEqual(1);
  });
  test('Render del titulo en Hero', () => {
    const hero = shallow(
      <Hero title='Troud' />,
    );
    expect(hero.find('.Hero__title').text()).toEqual('Troud');
  });
  test('Render de Imagen', () => {
    const hero = shallow(<Hero image='logo.svg' />);
    const img = hero.find('img');
    const src = img.prop('src');
    expect(src).toBe('logo.svg');
  });
});

describe('Hero Snapshot', () => {
  test('Comprobar la UI del Hero', () => {
    const hero = create(<Hero />);
    expect(hero.toJSON()).toMatchSnapshot();
  });
});
