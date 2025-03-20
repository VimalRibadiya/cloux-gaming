import React, { useState } from "react";

const Categories_games2_props = ({
  all,
  Envato,
  Gamevision,
  GloriaGames,
  XtraSoft,
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
            onClick={(e) => handleClick(e, "Envato")}
            className={activeCategory === "Envato" ? "active" : ""}
          >
            {Envato}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "Gamevision")}
            className={activeCategory === "Gamevision" ? "active" : ""}
          >
            {Gamevision}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "GloriaGames")}
            className={activeCategory === "GloriaGames" ? "active" : ""}
          >
            {GloriaGames}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "XtraSoft")}
            className={activeCategory === "XtraSoft" ? "active" : ""}
          >
            {XtraSoft}
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

export default Categories_games2_props;
