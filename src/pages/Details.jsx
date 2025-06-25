import React from "react";

import Header from "../components/Header/Header";
import FullCard from "../components/FullCard/FullCard";

const Details = (props) => {
  const {
    match: {
      params: { articleId: id },
    },
  } = props;

  return (
    <>
      <Header />
      <FullCard id={id} />
    </>
  );
};

export default Details;
