// import React from "react";

// const Categories_props1 = (b) => {
//     return (
//         <>
//             <div className="categories-inner-in1">
//                 <ul>
//                     <li><a href="#">{b.all}</a></li>
//                     <li><a href="#">{b.origin}</a></li>
//                     <li><a href="#">{b.playstation4}</a></li>
//                     <li><a href="#">{b.steam}</a></li>
//                     <li><a href="#">{b.uplay}</a></li>
//                     <li><a href="#">{b.xboxOne}</a></li>
//                 </ul>
//             </div>
//         </>
//     )
// }
// export default Categories_props1;

// import React from "react";

// const Categories_props1 = ({ all, origin, playstation4, steam, uplay, xboxOne, onCategorySelect }) => {
//   const handleClick = (event, category) => {
//     event.preventDefault(); // Prevents page reload
//     onCategorySelect(category);
//     event.target.classList.toggle("active");

//   };

//   return (
//     <div className="categories-inner-in1">
//       <ul>
//         <li><a href="#" onClick={(e) => handleClick(e, "all")}>{all}</a></li>
//         <li><a href="#" onClick={(e) => handleClick(e, "origin")}>{origin}</a></li>
//         <li><a href="#" onClick={(e) => handleClick(e, "playstation4")}>{playstation4}</a></li>
//         <li><a href="#" onClick={(e) => handleClick(e, "steam")}>{steam}</a></li>
//         <li><a href="#" onClick={(e) => handleClick(e, "uplay")}>{uplay}</a></li>
//         <li><a href="#" onClick={(e) => handleClick(e, "xbox one")}>{xboxOne}</a></li>
//       </ul>
//       <style>{`
//       .active {
//         color: red;
//         font-weight: bold;
//       }
//     `}</style>
//     </div>
//   );
// };

// export default Categories_props1;

import React, { useState } from "react";

const Categories_props1 = ({
  all,
  origin,
  playstation4,
  steam,
  uplay,
  xboxOne,
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
            onClick={(e) => handleClick(e, "origin")}
            className={activeCategory === "origin" ? "active" : ""}
          >
            {origin}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "playstation4")}
            className={activeCategory === "playstation4" ? "active" : ""}
          >
            {playstation4}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "steam")}
            className={activeCategory === "steam" ? "active" : ""}
          >
            {steam}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "uplay")}
            className={activeCategory === "uplay" ? "active" : ""}
          >
            {uplay}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "xbox one")}
            className={activeCategory === "xbox one" ? "active" : ""}
          >
            {xboxOne}
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

export default Categories_props1;
