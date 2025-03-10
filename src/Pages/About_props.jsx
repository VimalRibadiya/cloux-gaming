import React from "react";

const About_props = (item) => {
  return (
    <>
      <div className="about2-inner-contents-in">
        <div className="about2-inner-contents-in-item">
          <i class={item.i} aria-hidden="true"></i>
          <h2>{item.h2}</h2>
          <p>{item.p}</p>
        </div>
      </div>
    </>
  );
};

export default About_props;
