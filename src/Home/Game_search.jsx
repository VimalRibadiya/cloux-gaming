import React, { useState } from "react";

const Game_search = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (submenu) => {
    setDropdown(dropdown === submenu ? null : submenu);
  };

  return (
    <div className="games-top">
      <div className="games-inner">
        <div className="games-content">
          <div className="games-form">
            <h2 className="games-title">Game Search</h2>

            <input type="text" placeholder="Keyword" className="games-input1" />

            <div className="dropdown">
              <input
                type="text"
                placeholder="Platform"
                className="games-input"
                readOnly
                onClick={() => toggleDropdown("platform")}
              />
              <i class="fa-solid fa-chevron-down"></i>
              {dropdown === "platform" && (
                <ul className="games-input-sub">
                  {[
                    "Mac OS X",
                    "Microsoft Windows",
                    "Origin",
                    "Playstation 4",
                    "Steam",
                    "Uplay",
                    "Xbox One",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="dropdown">
              <input
                type="text"
                placeholder="Genre"
                className="games-input"
                readOnly
                onClick={() => toggleDropdown("genre")}
              />
              <i class="fa-solid fa-chevron-down"></i>
              {dropdown === "genre" && (
                <ul className="games-input-sub">
                  {[
                    "Action",
                    "Adventure",
                    "Casual",
                    "FPS",
                    "Massively Multiplayer",
                    "Racing",
                    "RPG",
                    "Simulations",
                    "Sports",
                    "Strategy",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="dropdown">
              <input
                type="text"
                placeholder="Language"
                className="games-input"
                readOnly
                onClick={() => toggleDropdown("language")}
              />
              <i class="fa-solid fa-chevron-down"></i>
              {dropdown === "language" && (
                <ul className="games-input-sub">
                  {[
                    "English",
                    "German",
                    "Italian",
                    "Portuguese",
                    "Spanish",
                    "Turkish",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <input type="submit" value="Search" className="games-submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game_search;
