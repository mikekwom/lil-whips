import React, { useState } from "react";
import "../menu.css";
import Card from "../Components/Card";
import data from "../data";
import { Collapse } from "react-collapse";

function Menu() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        name={item.name}
        // img={item.img}
        price={item.price}
      />
    );
  });

  const [isActive, setActive] = useState(false);
  let i = props;

  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="menu-container">
        <h3>Appetizers</h3>
        <Collapse isOpened={false}>
          <div className="menu-items-container">{cards}</div>
        </Collapse>
      </div>
    </div>
  );
}

export default Menu;
