import React from "react";

const Feat_games_Props3 = (props) => {
    return (
        <>
            <div className="mini-in-con">
                <div className="mini-in-con-image">
                    <img src={props.img} alt="" />
                </div>
                <div className="mini-in-con-content">
                    <h3>{props.h3}</h3>
                    <p>{props.p}</p>
                    <ul>
                        <li>
                            <a href="#"><i className={props.i}></i>{props.a}</a>
                            <a href="#"><i className={props.i2}></i>{props.a2}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Feat_games_Props3