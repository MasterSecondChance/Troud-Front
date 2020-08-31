import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import ModifyClothe from '../../pages/ModifyClothe';
import renderer, { create } from 'react-test-renderer';

describe('<ModifyClothe />', () => {
  test('Render del componente ModifyClothe', () => {
    const modify = shallow(
      <ProviderMock>
        <ModifyClothe />
      </ProviderMock>
    );
    expect(modify.length).toEqual(1);
  })
})