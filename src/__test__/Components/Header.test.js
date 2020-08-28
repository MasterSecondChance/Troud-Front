import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header/Header';
import renderer, { create } from 'react-test-renderer';
import * as DataContext from '../../utils/DataContext'
import DataProvider from '../../utils/DataContext';

describe('<Header />', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  })
  test('Render del titulo', () => {
    const header = shallow(<Header />);
    expect(header.find('.Header__Title').text()).toEqual('Trode')
  })
  test('Render de 4 opciones de menu', () => {
    const header = shallow(<Header />);
    expect(header.find('li').length).toEqual(4);
  })
})

// describe('<Header /> DataContex', () => {
//   test('Mock al contexto', () => {

//     const TestComponent = () => {
//       const { userData, saveUserData, category, saveCategory, profileImage, saveImage } = useContext(DataContext);

//       return <>
//         <div data-testid="value">{category}</div>
//         <button onClick={() => saveCategory('Zapatos')}>setCategory</button>
//       </>
//     }
//     const wraper = mount(
//       <ProviderMock>
//         <DataProvider>
//           <Header />
//         </DataProvider>
//       </ProviderMock>);

//     expect(wraper.find('[data-testid="value"]').text()).toEqual('Zapatos');
//   })
// })


//describe('Header Snapshot', () => {
//  test('Comprobar la UI del Header', () => {
//    const header = create(
//      <ProviderMock>
//        <Header />
//      </ProviderMock>
//    )
//    expect(header.toJSON()).toMatchSnapshot();
//  })
//})
