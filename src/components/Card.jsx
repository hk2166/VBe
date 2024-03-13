import React from "react";
import './card.scss'
function Card(props){
    return(
        <>
        <div className="card_section">
            <div className="card_items">
            <div className="icon">
                <img src={props.icon1} alt="quality"/>
                </div>
                <p className="quality">{props.heading1}</p>
                <p className="quality_desc">{props.heading2}</p>
            </div>
        </div>
        </>
    )
}
export default Card