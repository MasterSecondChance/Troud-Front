import {
  faHatCowboy,
  faMitten,
  faShoePrints,
  faSocks,
  faTshirt,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getArticles } from "../../../api";
import "./Category.scss";

function Category({ setCategory }) {
  const [uniqueCategories, setUniqueCategories] = useState([]);

  const categoryFilt = [];

  const defineIcon = (item) => {
    switch (item) {
      case "Camisetas":
        return faTshirt;
      case "Calzado":
        return faShoePrints;
      case "Accesorios":
        return faHatCowboy;
      case "Pantalones":
        return faUserSecret;
      case "Ropa Interior":
        return faMitten;
      case "Otros":
        return faSocks;
      default:
        return faTshirt;
    }
  };

  const setCategoryContext = (newCategory) => {
    // saveCategory(newCategory)
    sessionStorage.setItem("category", newCategory);
    setCategory(newCategory);
    // console.log(newCategory);
  };

  useEffect(() => {
    if (!sessionStorage.length) {
      sessionStorage.setItem("category", JSON.stringify({ category: 0 }));
      setCategory(JSON.stringify({ category: 0 }));
    }
    const filterCategories = async () => {
      try {
        const categoryList = await getArticles();
        Object.keys(categoryList.data.data).map((id) => {
          categoryFilt.push(categoryList.data.data[id].type);
        });
        // Remove duplicates or more
        const filterCategory = (valor, indice, self) => {
          return self.indexOf(valor) === indice;
        };
        setUniqueCategories(categoryFilt.filter(filterCategory));
      } catch (error) {
        console.log(error);
        toast("Error al cargar artículos.", {
          type: "error",
          autoClose: 2000,
        });
      }
    };
    filterCategories();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="Category">
        {uniqueCategories.map((item) => (
          <div
            className="Category-item"
            key={item}
            onClick={() => {
              setCategoryContext(item);
            }}
          >
            <span className="Category-item__name">{item}</span>
          </div>
        ))}
        <div
          className="Category-item"
          key="clear"
          onClick={() => {
            setCategoryContext("");
          }}
        >
          <span className="Category-item__name">Quitar filtros</span>
        </div>
      </div>
    </>
  );
}

export default Category;
