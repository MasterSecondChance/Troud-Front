import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import ListOfMessages from '../../components/ListOfMessages/ListOfMessages';
import renderer, { create } from 'react-test-renderer';

describe('<ListOfMessages />', () => {
  test('Render del componente ListOfMessages', () => {
    const listofMessages = shallow(
      <ProviderMock>
        <ListOfMessages />
      </ProviderMock>
    );
    expect(listofMessages.length).toEqual(1);
  })
})

describe('ListOfMessages Snapshot', () => {
  test('Comprobar la UI del ListOfMessages', () => {
    const listofMessages = create(<ListOfMessages />)
    expect(listofMessages.toJSON()).toMatchSnapshot();
  })
})