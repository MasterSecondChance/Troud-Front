import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/providerMock";
import Message from "../../components/Message/Message";
import renderer, { create } from "react-test-renderer";

describe("<Message />", () => {
  test("Render del componente Message", () => {
    const message = shallow(
      <ProviderMock>
        <Message />
      </ProviderMock>
    );
    expect(message.length).toEqual(1);
  });
});
