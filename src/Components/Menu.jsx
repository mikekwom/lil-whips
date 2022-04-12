import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

function Menu() {
  let { id } = useParams();
  return (
    <div>
      <h2>Menu</h2>
      <h3>{data[id].name}</h3>
      <h3>{data[id].price}</h3>
    </div>
  );
}

export default Menu;
