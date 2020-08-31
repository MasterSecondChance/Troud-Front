import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Inbox from '../../pages/Inbox';
import renderer, { create } from 'react-test-renderer';

describe('<Inbox />', () => {
  test('Render del componente Home', () => {
    const inbox = shallow(
      <ProviderMock>
        <Inbox />
      </ProviderMock>
    );
    expect(inbox.length).toEqual(1);
  })
})