import React from 'react';
import { shallow } from 'enzyme';
import Success from '../../components/Sign/Success';

describe('<Success />', () => {
  test('Render del componente Success', () => {
    const success = shallow(<Success />);
    expect(success.length).toEqual(1);
  })
  test('Mensaje de salida', () => {
    const success = shallow(
      <Success />
    );
    expect(success.find('h1').text()).toEqual('Gracias por tu registro')
  })
})