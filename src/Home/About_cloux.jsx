import React from "react";

const About_cloux = () => {
  return (
    <>
      <div className="about-outer">
        <div className="container">
          <div className="about-inner">
            <div className="about-inner-item">
              <div className="about-inner-item-image">
                <img
                  src="/cloux-gaming/images/about-box-image-530x370.jpg"
                  alt="about-box-image-530x370.jpg"
                />
              </div>
            </div>
            <div className="about-inner-item">
              <div className="about-inner-item-content">
                <div className="title">
                  About the <br />
                  <span>Cloux</span>
                </div>
                <div className="par">
                  Cloux is the ultimate gaming platform, bringing players,
                  developers, and communities together. Explore new worlds,
                  connect with fellow gamers, and stay updated with the latest
                  industry trends. Join us and take your gaming experience to
                  the next level!
                </div>
                <div className="btn">
                  <a href="#"><span>Read more</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_cloux;
