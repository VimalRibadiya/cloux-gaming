import React from "react";

const Fifa_soccer = () => {
  return (
    <>
      <div className="Fifa-outer">
        <div className="container">
          <div className="Fifa-inner">
            <div className="fifa-inner-item">
              <div className="fifa-inner-item-content">
                <div className="title">
                  FIFA Soccer <br />
                  <span>is Released</span>
                </div>
                <div className="par">
                  The wait is over! Experience next-level gameplay, enhanced
                  graphics, and realistic mechanics. Build your dream team,
                  compete globally, and dominate the field. Get ready for the
                  ultimate soccer challenge and rise to glory in FIFA’s latest
                  release!
                </div>
                <div className="btn">
                  <a href="#"><span>Read more</span></a>
                  <a href="#"><span>buy now</span></a>
                </div>
              </div>
            </div>
            <div className="fifa-inner-item">
              <div className="fifa-inner-item-image">
                <img
                  src="/cloux-gaming/images/fifa-release-image-530x370.jpg"
                  alt="fifa-release-image-530x370.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fifa_soccer;
