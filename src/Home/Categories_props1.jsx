import React from "react";

const Categories_props1 = (b) => {
    return (
        <>
            <div className="categories-inner-in1">
                <ul>
                    <li><a href="#">{b.all}</a></li>
                    <li><a href="#">{b.origin}</a></li>
                    <li><a href="#">{b.playstation4}</a></li>
                    <li><a href="#">{b.steam}</a></li>
                    <li><a href="#">{b.uplay}</a></li>
                    <li><a href="#">{b.xboxOne}</a></li>
                </ul>
            </div>
        </>
    )
}
export default Categories_props1;