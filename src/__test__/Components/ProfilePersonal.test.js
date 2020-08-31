import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import ProfilePersonal from '../../components/ProfilePersonal/ProfilePersonal';
import renderer, { create } from 'react-test-renderer';

describe('<ProfilePersonal />', () => {
  test('Render del componente ProfilePersonal', () => {
    const profilePersonal = shallow(
      <ProviderMock>
        <ProfilePersonal />
      </ProviderMock>
    );
    expect(profilePersonal.length).toEqual(1);
  })
})