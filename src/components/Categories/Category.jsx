import React, { useEffect, useState, useContext } from 'react';
import './Category.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faShoePrints, faHatCowboy, faUserSecret, faMitten, faSocks } from '@fortawesome/free-solid-svg-icons';
import api, { getArticles } from '../../../api';
import { DataContext } from '../../utils/DataContext';

const Category = () => {

  const { saveCategory } = useContext(DataContext);

  const [uniqueCategories, setUniqueCategories] = useState([]);

  const categoryFilt = [];

  const defineIcon = (item) => {
    switch (item) {
      case 'Camisetas':
        return (
          faTshirt
        );
      case 'Calzado':
        return (
          faTshirt
        );
      case 'Camisetas':
        return (
          faTshirt
        );
      case 'Camisetas':
        return (
          faTshirt
        );
      case 'Pantalones':
        return (
          faTshirt
        );
      default:
        return faShoePrints;
    }
  }

  const setCategoryContext = (newCategory) => {
    saveCategory(newCategory)
  }

  useEffect(() => {
    const filterCategories = async () => {
      try {
        const categoryList = await getArticles()
        Object.keys(categoryList.data.data).map(id => {
          categoryFilt.push(categoryList.data.data[id].type);
        })
        // Remove duplicates or more
        const filterCategory = (valor, indice, self) => {
          return self.indexOf(valor) === indice;
        }
        setUniqueCategories(categoryFilt.filter(filterCategory))
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    filterCategories();
  }, []);

  return (
    <div className="Category">
      {
        uniqueCategories.map(item => (
          <div className="Category__Item" key={item} onClick={() => {
            setCategoryContext(item)
          }}>
            <span className="Category__Item-Name">{item}</span>
          </div>
        ))
      }
      <div className="Category__Item" key='clear' onClick={() => {
        setCategoryContext('')
      }}>
        <span className="Category__Item-Name">DesFiltrar</span>
      </div>
    </div>
  );
};

export default Category;