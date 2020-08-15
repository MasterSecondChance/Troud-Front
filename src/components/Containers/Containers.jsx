import React from 'react';
import './Container.scss';

function Containers(props) {
  return <div className="containerMain">{props.children}</div>;
}

export default Containers;
