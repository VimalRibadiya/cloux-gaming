import React from "react";

const Header_props = ({ label, subItems ,link}) => {
    return (
        <>
            <li>
                <a href="#" className="icon">{label}</a>
                {subItems && subItems.length > 0 &&  (
                    <ul className="sub-menu">
                        {subItems.map((subItem) => (
                            <li>
                                <a href="#" className="sub-menu-item">{subItem}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        </>
    )
}

export default  Header_props
