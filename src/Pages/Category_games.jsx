import React, { useState } from "react";
import Categories_games_props from "./Category_games_props";
import Categories_props2 from "../Home/Categories_props2";


const gamesData = [
    {
        image: "/cloux-gaming/images/blog1.jpg",
        genre1: "adventure",
        genre2: "fps",
        title: "Space Wars",
        platforms: ["early access", "free to play","game"],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog2.jpg",
        genre1: "racing",
        genre2: "sports",
        title: "Return of the Cars",
        platforms: ["early access", "free to play", "game"],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog3.jpg",
        genre1: "simulation",
        genre2: "strategy",
        title: "Planes of Gloria",
        platforms: ["early access", "free to play", "game"],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog4.jpg",
        genre1: "adventure",
        genre2: "",
        title: "Earth Wars: History",
        platforms: ["game", "free to play"],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog5.jpg",
        genre1: "adventure",
        genre2: "",
        title: "The Warrior 3",
        platforms: ["game", "free to play"],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog6.jpg",
        genre1: "action",
        genre2: "racing",
        title: "Life and Struggle",
        platforms: ["game", "free to play"],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog7.jpg",
        genre1: "sports",
        genre2: "",
        title: "Gloria Soccer 2018",
        platforms: ["game"],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
    {
        image: "/cloux-gaming/images/blog8.jpg",
        genre1: "action",
        genre2: "adventure",
        title: "Egypt and World",
        platforms: ["game"],
        description:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet",
    },
];

const Categories_games = () => {
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
                        Games by Categories
                    </h1>
                </div>
            </div>
            <div className="empty2"></div>
            <div className="categories`-outer">
                <div className="container">
                    <div className="categories-inner">
                        {/* Categories Selection */}
                        <div className="categories-inner-in1">
                            <Categories_games_props
                                all="all"
                                earlyaccess="early access"
                                freetoplay="free to play"
                                game = "game"
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

export default Categories_games;