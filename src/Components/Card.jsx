import React from "react";

function Card(props) {
  return (
    <div>
      <div className="menu-item-card">
        <h4 className="item-name">{props.name}</h4>
        <img className="item-image"></img>
        <p className="item-price">{props.price}</p>
      </div>
    </div>
  );
}

export default Card;
