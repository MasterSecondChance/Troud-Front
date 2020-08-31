import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import SignIn from '../../pages/SignIn';

describe('<SignIn />', () => {
  test('Render del componente de inicio de sesión', () => {
    const signIn = shallow(
      <ProviderMock>
        <SignIn />
      </ProviderMock>,
    );
    expect(signIn.length).toEqual(1);
  });
});
