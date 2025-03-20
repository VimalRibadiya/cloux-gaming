import React, { useState } from "react";

const Categories_games_props = ({
  all,
  earlyaccess,
  freetoplay,
  game,
  onCategorySelect,
}) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleClick = (event, category) => {
    event.preventDefault(); // Prevents page reload
    setActiveCategory(category); // Update the active category
    onCategorySelect(category); // Call the parent handler
  };

  return (
    <div className="categories-inner-in1">
      <ul>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "all")}
            className={activeCategory === "all" ? "active" : ""}
          >
            {all}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "early access")}
            className={activeCategory === "early access" ? "active" : ""}
          >
            {earlyaccess}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "free to play")}
            className={activeCategory === "free to play" ? "active" : ""}
          >
            {freetoplay}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "game")}
            className={activeCategory === "game" ? "active" : ""}
          >
            {game}
          </a>
        </li>
        
      </ul>
      <style>{`
        .active {
          color: white !important;
          font-weight: bold;
          background-color: #ffc311;
        }
      `}</style>
    </div>
  );
};

export default Categories_games_props;
