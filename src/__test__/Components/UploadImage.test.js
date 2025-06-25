import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/providerMock";
import UploadImage from "../../components/UploadImage/UploadImage";
import renderer, { create } from "react-test-renderer";

describe("<UploadImage />", () => {
  test("Render del componente UploadImage", () => {
    const uploadImage = shallow(
      <ProviderMock>
        <UploadImage />
      </ProviderMock>
    );
    expect(uploadImage.length).toEqual(1);
  });
});
