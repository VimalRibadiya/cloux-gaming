import React from "react";

const Feat_games_Props2 = (props) => {
    return (
        <><div className="feat-game-inn">
            <div className="feat-game-inner-in-items">
                <div className="image">
                    <a href="#">
                        <img src={props.image} alt="" />
                    </a>
                    <div className="genre">
                        <a href="#">{props.genre3},</a>
                        <a href="#">{props.genre4}</a>
                    </div>
                </div>
                <div className="content">
                    <a href="#" className="content-a">
                        {props.title}
                    </a>
                    <div className="content-a2">
                        <a href="#">{props.platform1},</a>
                        <a href="#">{props.platform2}</a>
                    </div>
                    <p>{props.description}</p>
                </div>
                </div>
            </div>

            
        </>
    )
}

export default Feat_games_Props2