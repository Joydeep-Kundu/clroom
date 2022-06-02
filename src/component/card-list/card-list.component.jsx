import React from "react";
import Card from "../card/card.components";
import './card-list.styles.css';

export const CardList = props => {
    return (<div className="card-list">
        {props.data.map(datas => (
            <Card datas={datas} />
        ))}
    </div>
    )
}