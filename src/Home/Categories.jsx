import React from "react";
import Categories_props1 from "./Categories_props1";
import Categories_props2 from "./Categories_props2";

const Categories = () => {
  return (
    <>
      <div className="categories-outer">
        <div className="container">
          <div className="categories-inner">
            <div className="categories-inner-in1">
              <Categories_props1
                all="all"
                origin="origin"
                playstation4="playstation4"
                steam="steam"
                uplay="uplay"
                xboxOne="xbox one"
              />
            </div>
            <div className="categories-inner-in2">
              <Categories_props2
                image="/cloux-gaming/images/blog1.jpg"
                genre1="adventure"
                genre2="fps"
                title="Space Wars"
                platform1="steam"
                platform2="xbox one"
                description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
              />
              <Categories_props2
                image="/cloux-gaming/images/blog2.jpg"
                genre1="racing"
                genre2="sports"
                title="Return of the Cars"
                platform1="steam"
                platform2="uplay"
                description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
              />
              <Categories_props2
                image="/cloux-gaming/images/blog3.jpg"
                genre1="simulation"
                genre2="strategy"
                title="Planes of Gloria"
                platform1="uplay"
                platform2="xbox one"
                description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
              />
              <Categories_props2
                image="/cloux-gaming/images/blog4.jpg"
                genre1="adventure"
                genre2=""
                title="Earth Wars: History"
                platform1="origin"
                platform2="playstation 4"
                description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
              />
              <Categories_props2
                image="/cloux-gaming/images/blog5.jpg"
                genre1="adventure"
                genre2=""
                title="The Warrior 3"
                platform1="origin"
                platform2="playstation 4"
                description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
              />
              <Categories_props2
                image="/cloux-gaming/images/blog6.jpg"
                genre1="action"
                genre2="racing"
                title="Life and Struggle"
                platform1="origin"
                platform2="steam, uplay"
                description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
              />
              <Categories_props2
                image="/cloux-gaming/images/blog7.jpg"
                genre1="sports"
                genre2=""
                title="Gloria Soccer 2018"
                platform1="origin"
                platform2="playstation 4"
                description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
              />
              <Categories_props2
                image="/cloux-gaming/images/blog8.jpg"
                genre1="action"
                genre2="adventure"
                title="Egypt and World"
                platform1="playstation 4"
                platform2="steam"
                description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
