import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Hero from '../../components/Hero/Hero';
import renderer, { create } from 'react-test-renderer';

describe('<Hero />', () => {
  test('Render del componente Hero', () => {
    const hero = shallow(
      <ProviderMock>
        <Hero />
      </ProviderMock>
    );
    expect(hero.length).toEqual(1);
  })
  test('Render del titulo en Hero', () => {
    const hero = shallow(
      <Hero title={'Trode'} />
    );
    expect(hero.find('.Hero__title').text()).toEqual('Trode')
  })
  test('Render de Imagen', () => {
    const hero = shallow(<Hero image={'logo.svg'} />);
    const img = hero.find('img');
    const src = img.prop('src');
    expect(src).toBe('logo.svg');
  })
})

describe('Hero Snapshot', () => {
  test('Comprobar la UI del Hero', () => {
    const hero = create(<Hero />)
    expect(hero.toJSON()).toMatchSnapshot();
  })
})