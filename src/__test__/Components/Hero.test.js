import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Hero from '../../components/Hero/Hero';

describe('<Hero />', () => {
  const hero = shallow(
    <ProviderMock>
      <Hero />
    </ProviderMock>
  );
  test('Render del componente Hero', () => {
    expect(hero.length).toEqual(1);
  })
  test('Render del titulo', () => {
    expect(hero.find('.Hero__Title').text()).toEqual('Trode')
  })
})