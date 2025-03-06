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


import React from "react";

const Categories_props1 = ({ all, origin, playstation4, steam, uplay, xboxOne, onCategorySelect }) => {
  const handleClick = (event, category) => {
    event.preventDefault(); // Prevents page reload
    onCategorySelect(category);
  };

  return (
    <div className="categories-inner-in1">
      <ul>
        <li><a href="#" onClick={(e) => handleClick(e, "all")}>{all}</a></li>
        <li><a href="#" onClick={(e) => handleClick(e, "origin")}>{origin}</a></li>
        <li><a href="#" onClick={(e) => handleClick(e, "playstation4")}>{playstation4}</a></li>
        <li><a href="#" onClick={(e) => handleClick(e, "steam")}>{steam}</a></li>
        <li><a href="#" onClick={(e) => handleClick(e, "uplay")}>{uplay}</a></li>
        <li><a href="#" onClick={(e) => handleClick(e, "xbox one")}>{xboxOne}</a></li>
      </ul>
    </div>
  );
};

export default Categories_props1;

