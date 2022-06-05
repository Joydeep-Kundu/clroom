import React, { useState } from "react";
import './card.style.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dis = useSelector((state) => state.course)

    //state
    const [check, setCheck] = useState();
    //function

    const cardData = () => {
        dispatch({
            type: 'course', payload: props.datas.c_id
        })
        navigate('/room')
    }
    return (
        <div className="card-container" onClick={cardData} >
            <h2>{props.datas.c_name}</h2>
            <p>{props.datas.c_dis}</p>
            <p>{props.datas.owner_e}</p>
        </div>

    )
}
export default Card;