import React from "react";
import Game_shop_props from "./Game_shop_props";

const Game_shop = () => {
  return (
    <>
      <div className="gameshop-outer">
        <div className="container">
          <div className="gameshop-inner">
            <div className="gameshop-inner-in1">
              game <span>shop</span>
            </div>
            <div className="gameshop-inner-in2">
              {/* <div className="gameshop-inner-in">
                            <div className="gameshop-inner-in-image">
                                <img src="" alt="" />
                            </div>
                            <div className="gameshop-inner-in-content">
                                <a href="#"></a>
                                <h2></h2>
                            </div>
                        </div> */}
              <Game_shop_props
                image="/cloux-gaming/images/cd_5_angle-560x500.jpg"
                a="Game Pack DVD"
                h2="£56.00"
              />
              <Game_shop_props
                image="/cloux-gaming/images/product-3-560x500.jpg"
                a="Office Coffee Pack"
                h2="£390.79"
              />
              <Game_shop_props
                image="/cloux-gaming/images/product-2-560x500.jpg"
                a="Pulse Headphone"
                h2="£355.00"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game_shop;
