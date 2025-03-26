import React from "react";

const Feat_games_Props = (props) => {
    return (
        <>

            <div className="mini-content1">
                <ul>
                    <li><div className="genre1"><i className={props.i}></i>{props.genre1}</div>
                        <div className="genre-in">
                            <a href="#">{props.a1}</a>
                            <a href="#">{props.a2}</a>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div className="minimum">
                <ul>
                    <li>
                        <div className="genre2">{props.genre2}</div>
                        <p>{props.p1}</p>
                    </li>
                </ul>
            </div>


            {/* <div className="categories-inner-in-items">
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
            </div> */}
        </>
    )
}

export default Feat_games_Props