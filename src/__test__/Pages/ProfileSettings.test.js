import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import ProfileSettings from '../../pages/ProfileSettings';
import renderer, { create } from 'react-test-renderer';

describe('<ProfileSettings />', () => {
  test('Render del componente ProfileSettings', () => {
    const profileSettings = shallow(
      <ProviderMock>
        <ProfileSettings />
      </ProviderMock>
    );
    expect(profileSettings.length).toEqual(1);
  })
})