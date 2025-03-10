// import React from "react";
// import Categories_props1 from "./Categories_props1";
// import Categories_props2 from "./Categories_props2";

// const Categories = () => {
//   return (
//     <>
//       <div className="categories-outer">
//         <div className="container">
//           <div className="categories-inner">
//             <div className="categories-inner-in1">
//               <Categories_props1
//                 all="all"
//                 origin="origin"
//                 playstation4="playstation4"
//                 steam="steam"
//                 uplay="uplay"
//                 xboxOne="xbox one"
//               />
//             </div>
//             <div className="categories-inner-in2">
//               <Categories_props2
//                 image="/cloux-gaming/images/blog1.jpg"
//                 genre1="adventure"
//                 genre2="fps"
//                 title="Space Wars"
//                 platform1="steam"
//                 platform2="xbox one"
//                 description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
//               />
//               <Categories_props2
//                 image="/cloux-gaming/images/blog2.jpg"
//                 genre1="racing"
//                 genre2="sports"
//                 title="Return of the Cars"
//                 platform1="steam"
//                 platform2="uplay"
//                 description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
//               />
//               <Categories_props2
//                 image="/cloux-gaming/images/blog3.jpg"
//                 genre1="simulation"
//                 genre2="strategy"
//                 title="Planes of Gloria"
//                 platform1="uplay"
//                 platform2="xbox one"
//                 description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
//               />
//               <Categories_props2
//                 image="/cloux-gaming/images/blog4.jpg"
//                 genre1="adventure"
//                 genre2=""
//                 title="Earth Wars: History"
//                 platform1="origin"
//                 platform2="playstation 4"
//                 description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
//               />
//               <Categories_props2
//                 image="/cloux-gaming/images/blog5.jpg"
//                 genre1="adventure"
//                 genre2=""
//                 title="The Warrior 3"
//                 platform1="origin"
//                 platform2="playstation 4"
//                 description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
//               />
//               <Categories_props2
//                 image="/cloux-gaming/images/blog6.jpg"
//                 genre1="action"
//                 genre2="racing"
//                 title="Life and Struggle"
//                 platform1="origin"
//                 platform2="steam, uplay"
//                 description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
//               />
//               <Categories_props2
//                 image="/cloux-gaming/images/blog7.jpg"
//                 genre1="sports"
//                 genre2=""
//                 title="Gloria Soccer 2018"
//                 platform1="origin"
//                 platform2="playstation 4"
//                 description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
//               />
//               <Categories_props2
//                 image="/cloux-gaming/images/blog8.jpg"
//                 genre1="action"
//                 genre2="adventure"
//                 title="Egypt and World"
//                 platform1="playstation 4"
//                 platform2="steam"
//                 description="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet"
//               />
//             </div>
//             <div className="categories-inner-in3">
//               <a href="#">ALL GAMES</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Categories;

import React, { useState } from "react";
import Categories_props1 from "./Categories_props1";
import Categories_props2 from "./Categories_props2";

const gamesData = [
  {
    image: "/cloux-gaming/images/blog1.jpg",
    genre1: "adventure",
    genre2: "fps",
    title: "Space Wars",
    platforms: ["steam", "xbox one"],
    description:
      "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
  },
  {
    image: "/cloux-gaming/images/blog2.jpg",
    genre1: "racing",
    genre2: "sports",
    title: "Return of the Cars",
    platforms: ["steam", "uplay"],
    description:
      "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
  },
  {
    image: "/cloux-gaming/images/blog3.jpg",
    genre1: "simulation",
    genre2: "strategy",
    title: "Planes of Gloria",
    platforms: ["uplay", "xbox one"],
    description:
      "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
  },
  {
    image: "/cloux-gaming/images/blog4.jpg",
    genre1: "adventure",
    genre2: "",
    title: "Earth Wars: History",
    platforms: ["origin", "playstation4"],
    description:
      "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
  },
  {
    image: "/cloux-gaming/images/blog5.jpg",
    genre1: "adventure",
    genre2: "",
    title: "The Warrior 3",
    platforms: ["origin", "playstation4"],
    description:
      "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
  },
  {
    image: "/cloux-gaming/images/blog6.jpg",
    genre1: "action",
    genre2: "racing",
    title: "Life and Struggle",
    platforms: ["origin", "steam, uplay"],
    description:
      "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
  },
  {
    image: "/cloux-gaming/images/blog7.jpg",
    genre1: "sports",
    genre2: "",
    title: "Gloria Soccer 2018",
    platforms: ["origin", "playstation4"],
    description:
      "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
  },
  {
    image: "/cloux-gaming/images/blog8.jpg",
    genre1: "action",
    genre2: "adventure",
    title: "Egypt and World",
    platforms: ["playstation 4", "steam"],
    description:
      "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
  },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredGames =
    selectedCategory === "all"
      ? gamesData
      : gamesData.filter((game) => game.platforms.includes(selectedCategory));

  return (
    <div className="categories`-outer">
      <div className="container">
        <div className="categories-inner">
          {/* Categories Selection */}
          <div className="categories-inner-in1">
            <Categories_props1
              all="all"
              origin="origin"
              playstation4="playstation4"
              steam="steam"
              uplay="uplay"
              xboxOne="xbox one"
              onCategorySelect={handleCategoryClick}
            />
          </div>

          {/* Games List */}
          <div className="categories-inner-in2">
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <Categories_props2
                  image={game.image}
                  genre1={game.genre1}
                  genre2={game.genre2}
                  title={game.title}
                  platform1={game.platforms[0]}
                  platform2={game.platforms[1]}
                  description={game.description}
                />
              ))
            ) : (
              <p>No games found for this category.</p>
            )}
          </div>

          {/* View All Games */}
          <div className="categories-inner-in3">
            <a href="#">ALL GAMES</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
