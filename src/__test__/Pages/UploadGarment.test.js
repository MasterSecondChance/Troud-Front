import React from 'react';
import { shallow } from 'enzyme';
import UploadGarment from '../../pages/UploadGarment';

describe('<UploadGarment />', () => {
  test('Render del componente UploadGarment', () => {
    const uploadGarment = shallow(<UploadGarment />);
    expect(uploadGarment.length).toEqual(1);
  })
  test('Mensaje para subir prenda', () => {
    const uploadGarment = shallow(<UploadGarment />);
    const img = uploadGarment.find('Hero');
    const src = img.prop('title');
    expect(src).toBe('Sube tu prenda');
  })
  test('URL de la imagen', () => {
    const uploadGarment = shallow(<UploadGarment />);
    const img = uploadGarment.find('Hero');
    const src = img.prop('image');
    expect(src).toBe('https://trode-s3.s3.amazonaws.com/public/hero-upload-garment.svg');
  })
})