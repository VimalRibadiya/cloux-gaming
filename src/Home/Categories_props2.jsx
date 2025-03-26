import React from "react";
import { Link } from "react-router-dom";

const Categories_props2 = (a) => {
  return (
    <>
      <div className="categories-inner-in-items">
        <div className="image">
          <Link to={a.to}>
            <img src={a.image} alt="" />
          </Link>
          <div className="genre">
            <a href="#">{a.genre1},</a>
            <a href="#">{a.genre2}</a>
          </div>
        </div>
        <div className="content">
          <a href="#" className="content-a">
            {a.title}
          </a>
          <div className="content-a2">
            <a href="#">{a.platform1},</a>
            <a href="#">{a.platform2}</a>
          </div>
          <p>{a.description}</p>
        </div>
      </div>
    </>
  );
};
export default Categories_props2;
