import React from "react";

const Game_shop_props = (props) => {
  return (
    <div className="gameshop-inner-in">
      <div className="gameshop-inner-in-image">
        <img src={props.image} alt="" />
      </div>
      <div className="gameshop-inner-in-content">
        <a href="#">{props.a}</a>
        <h2>{props.h2}</h2>
      </div>
    </div>
  );
};

export default Game_shop_props;
