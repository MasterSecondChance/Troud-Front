import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Category from "../components/Categories/Category";

const Home = () => {
  const [category, setCategory] = useState(null);

  return (
    <>
      <Header />
      <Category setCategory={setCategory} />
      <Card category={category} />
    </>
  );
};

export default Home;
