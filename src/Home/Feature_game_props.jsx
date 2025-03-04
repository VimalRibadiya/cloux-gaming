import React from "react";

const Feature_game_props = (props) => {
  return (
    <>
      <li>
        <a href="#">
          <div className="featuregame-inner-in-item-image">
            <div className="image">
              <img src={props.img} alt="" />
            </div>
            <div className="main-content">
              <h2>{props.h2}</h2>
              <a href="#" className="con-a">
                {props.a1}
              </a>
              <a href="#" className="con-b">
                {props.a2}
              </a>
            </div>
            <div className="hover-content">
              <h3>{props.h3}</h3>
            </div>
          </div>
        </a>
      </li>
    </>
  );
};

export default Feature_game_props;
