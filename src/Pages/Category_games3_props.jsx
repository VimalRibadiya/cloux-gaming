import React, { useState } from "react";

const Categories_games3_props = ({
    all,
    Action,
    Adventure,
    FPS,
    Racing,
    Simulation,
    Sports,
    Strategy,
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
                        onClick={(e) => handleClick(e, "Action")}
                        className={activeCategory === "Action" ? "active" : ""}
                    >
                        {Action}
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => handleClick(e, "Adventure")}
                        className={activeCategory === "Adventure" ? "active" : ""}
                    >
                        {Adventure}
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => handleClick(e, "FPS")}
                        className={activeCategory === "FPS" ? "active" : ""}
                    >
                        {FPS}
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => handleClick(e, "Racing")}
                        className={activeCategory === "Racing" ? "active" : ""}
                    >
                        {Racing}
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => handleClick(e, "Simulation")}
                        className={activeCategory === "Simulation" ? "active" : ""}
                    >
                        {Simulation}
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => handleClick(e, "Sports")}
                        className={activeCategory === "Sports" ? "active" : ""}
                    >
                        {Sports}
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => handleClick(e, "Strategy")}
                        className={activeCategory === "Strategy" ? "active" : ""}
                    >
                        {Strategy}
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

export default Categories_games3_props;
