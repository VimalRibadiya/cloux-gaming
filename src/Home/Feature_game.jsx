import React from "react";
import Feature_game_props from "./Feature_game_props";

const Feature_game = () => {
  return (
    <>
      <div className="featuregame-outer">
        <div className="container">
          <div className="featuregame-inner">
            <div className="featuregame-inner-in">
              <div className="featuregame-inner-in-item1">
                featured <span>games</span>
              </div>
              <div className="featuregame-inner-in-item2">
                <ul>
                  <Feature_game_props
                    img="/cloux-gaming/images/blog1.jpg"
                    h2="space wars"
                    h3="space wars"
                    a1="steam, xbox one"
                    a2="adventure, fps"
                  />
                  <Feature_game_props
                    img="/cloux-gaming/images/blog2.jpg"
                    h2="return of the cars"
                    h3="return of the cars"
                    a1="steam, uplay"
                    a2="racing, sports"
                  />
                  <Feature_game_props
                    img="/cloux-gaming/images/blog3.jpg"
                    h2="plans of gloria"
                    h3="plans of gloria"
                    a1="uplay, xbox one"
                    a2="simulation,strategy"
                  />
                  <Feature_game_props
                    img="/cloux-gaming/images/blog4.jpg"
                    h2="earth wars"
                    h3="earth wars"
                    a1="origin, playstation4"
                    a2="adventure"
                  />
                  <Feature_game_props
                    img="/cloux-gaming/images/blog5.jpg"
                    h2="the warrior 3"
                    h3="the warrior 3"
                    a1="origin, playstation4"
                    a2="adventure"
                  />
                  <Feature_game_props
                    img="/cloux-gaming/images/blog6.jpg"
                    h2="life and strugle"
                    h3="life and strugle"
                    a1="origin, steam, uplay"
                    a2="action, racing"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature_game;
