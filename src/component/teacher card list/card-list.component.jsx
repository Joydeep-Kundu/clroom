import React from "react";
import TeacherCard from "../teacher card/card.components";
import './card-list.styles.scss';

const TeacherCardList = props => {

    return (<div className="card-list">
        {props.data.map(datas => (
            <TeacherCard datas={datas} user={props.user} />
        ))}
    </div>
    )
}
export default TeacherCardList;