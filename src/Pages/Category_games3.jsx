import React, { useState } from "react";
import Categories_games_props from "./Category_games_props";
import Categories_props2 from "../Home/Categories_props2";
import Categories_games3_props from "./Category_games3_props";


const gamesData = [
    {
        image: "/cloux-gaming/images/blog1.jpg",
        genre1: "adventure",
        genre2: "fps",
        title: "Space Wars",
        platforms: ["Action", "Adventure","FPS"],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog2.jpg",
        genre1: "racing",
        genre2: "sports",
        title: "Return of the Cars",
        platforms: ["Racing", "Sports",""],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog3.jpg",
        genre1: "simulation",
        genre2: "strategy",
        title: "Planes of Gloria",
        platforms: ["Simulation", "Strategy",""],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog4.jpg",
        genre1: "adventure",
        genre2: "",
        title: "Earth Wars: History",
        platforms: ["Adventure", "",""],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog5.jpg",
        genre1: "adventure",
        genre2: "",
        title: "The Warrior 3",
        platforms: ["Adventure", "",""],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog6.jpg",
        genre1: "action",
        genre2: "racing",
        title: "Life and Struggle",
        platforms: ["Racing", "",""],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog7.jpg",
        genre1: "sports",
        genre2: "",
        title: "Gloria Soccer 2018",
        platforms: ["Sports",""],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog8.jpg",
        genre1: "action",
        genre2: "adventure",
        title: "Egypt and World",
        platforms: ["Action","Adventure"],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
];

const Categories_games3 = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredGames =
        selectedCategory === "all"
            ? gamesData
            : gamesData.filter((game) => game.platforms.includes(selectedCategory));

    return (
        <>
            <div className="C2empty">
                <div className="cat-games-title">
                    <h1>
                        Games by Genres
                    </h1>
                </div>
            </div>
            <div className="empty2"></div>
            <div className="categories`-outer">
                <div className="container">
                    <div className="categories-inner">
                        {/* Categories Selection */}
                        <div className="categories-inner-in1">
                            <Categories_games3_props
                                all="all"
                                Action="Action"
                                Adventure="Adventure"
                                FPS="FPS"
                                Racing="Racing"
                                Simulation="Simulation"
                                Sports="Sports"
                                Strategy="Strategy"
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
        </>
    );
};

export default Categories_games3;

// import React, { useState } from "react";
// import Categories_games_props from "./Category_games_props";
// import Categories_props2 from "../Home/Categories_props2";
// import Categories_games3_props from "./Category_games3_props";


// const gamesData = [
//     {
//         image: "/cloux-gaming/images/blog1.jpg",
//         genre1: "adventure",
//         genre2: "fps",
//         title: "Space Wars",
//         platforms: ["", "",""],
//         description:
//             "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
//     },
//     {
//         image: "/cloux-gaming/images/blog2.jpg",
//         genre1: "racing",
//         genre2: "sports",
//         title: "Return of the Cars",
//         platforms: ["", "",""],
//         description:
//             "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
//     },
//     {
//         image: "/cloux-gaming/images/blog3.jpg",
//         genre1: "simulation",
//         genre2: "strategy",
//         title: "Planes of Gloria",
//         platforms: ["", "",""],
//         description:
//             "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
//     },
//     {
//         image: "/cloux-gaming/images/blog4.jpg",
//         genre1: "adventure",
//         genre2: "",
//         title: "Earth Wars: History",
//         platforms: ["", "",""],
//         description:
//             "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
//     },
//     {
//         image: "/cloux-gaming/images/blog5.jpg",
//         genre1: "adventure",
//         genre2: "",
//         title: "The Warrior 3",
//         platforms: ["", "",""],
//         description:
//             "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
//     },
//     {
//         image: "/cloux-gaming/images/blog6.jpg",
//         genre1: "action",
//         genre2: "racing",
//         title: "Life and Struggle",
//         platforms: ["", "",""],
//         description:
//             "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
//     },
//     {
//         image: "/cloux-gaming/images/blog7.jpg",
//         genre1: "sports",
//         genre2: "",
//         title: "Gloria Soccer 2018",
//         platforms: ["",""],
//         description:
//             "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
//     },
//     {
//         image: "/cloux-gaming/images/blog8.jpg",
//         genre1: "action",
//         genre2: "adventure",
//         title: "Egypt and World",
//         platforms: ["",""],
//         description:
//             "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
//     },
// ];

// const Categories_games3 = () => {
//     const [selectedCategory, setSelectedCategory] = useState("all");

//     const handleCategoryClick = (category) => {
//         setSelectedCategory(category);
//     };

//     const filteredGames =
//         selectedCategory === "all"
//             ? gamesData
//             : gamesData.filter((game) => game.platforms.includes(selectedCategory));

//     return (
//         <>
//             <div className="C2empty">
//                 <div className="cat-games-title">
//                     <h1>
//                         Games by Genres
//                     </h1>
//                 </div>
//             </div>
//             <div className="empty2"></div>
//             <div className="categories`-outer">
//                 <div className="container">
//                     <div className="categories-inner">
//                         {/* Categories Selection */}
//                         <div className="categories-inner-in1">
//                             <Categories_games3_props
//                                 all="all"
//                                 Action="Action"
//                                 Adventure="Adventure"
//                                 FPS="FPS"
//                                 Racing="Racing"
//                                 Simulation="Simulation"
//                                 Sports="Sports"
//                                 Strategy="Strategy"
//                                 onCategorySelect={handleCategoryClick}
//                             />
//                         </div>

//                         {/* Games List */}
//                         <div className="categories-inner-in2">
//                             {filteredGames.length > 0 ? (
//                                 filteredGames.map((game) => (
//                                     <Categories_props2
//                                         image={game.image}
//                                         genre1={game.genre1}
//                                         genre2={game.genre2}
//                                         title={game.title}
//                                         platform1={game.platforms[0]}
//                                         platform2={game.platforms[1]}
//                                         description={game.description}
//                                     />
//                                 ))
//                             ) : (
//                                 <p>No games found for this category.</p>
//                             )}
//                         </div>

//                         {/* View All Games */}
//                         <div className="categories-inner-in3">
//                             <a href="#">ALL GAMES</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Categories_games3;