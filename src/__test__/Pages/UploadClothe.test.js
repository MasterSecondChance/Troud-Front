import React from "react";
import { shallow } from "enzyme";
import UploadClothe from "../../pages/UploadClothe";

describe("<UploadClothe />", () => {
  test("Render del componente Upload Clothes", () => {
    const uploadClothe = shallow(<UploadClothe />);
    expect(uploadClothe.length).toEqual(1);
  });
  test("Mensaje para subir prenda", () => {
    const uploadClothe = shallow(<UploadClothe />);
    const img = uploadClothe.find("Hero");
    const src = img.prop("title");
    expect(src).toBe("Sube tu prenda");
  });
  test("URL de la imagen", () => {
    const uploadClothe = shallow(<UploadClothe />);
    const img = uploadClothe.find("Hero");
    const src = img.prop("image");
    expect(src).toBe("https://trode-s3.s3.amazonaws.com/public/hero-upload-garment.svg");
  });
});
