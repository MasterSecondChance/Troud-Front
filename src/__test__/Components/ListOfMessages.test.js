import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer, { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/providerMock';
import ListOfMessages from '../../components/ListOfMessages/ListOfMessages';

describe('<ListOfMessages />', () => {
  test('Render del componente ListOfMessages', () => {
    const listOfMessages = shallow(
      <ProviderMock>
        <ListOfMessages />
      </ProviderMock>,
    );
    expect(listOfMessages.length).toEqual(1);
  });
});
/*
describe('ListOfMessages Snapshot', () => {
  test('Comprobar la UI del ListOfMessages', () => {
    const listOfMessages = create(<ListOfMessages />)
    expect(listOfMessages.toJSON()).toMatchSnapshot(1);
  })
})*/
