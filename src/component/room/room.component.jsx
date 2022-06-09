import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import RoomHeader from "../room-header/room-header.component";
import SideBarLeft from "../sidebarleft/sidebarleft.component";
import Middlebar from "../middlebar/middlebar.component";

import './room.styles.scss';

const Room = () => {

    const clickCourse = useSelector((state) => state.course);
    const sign = useSelector((state) => state.sign);
    const semail = useSelector((state) => state.email);
    console.log('room=>> ', clickCourse, sign, semail);

    //state 
    const [room, setroom] = useState(clickCourse);
    const [scourse, setscourse] = useState({});
    const [user, setuser] = useState(semail);
    const [code, sCode] = useState(false)



    useEffect(() => {
        fetch(`http://localhost:5000/coursesel/${room}`)
            .then((res) => res.json())
            .then((data) => setscourse(...data))
    }, []);
    console.log('course', scourse);
    useEffect(() => {
        if (scourse.owner_e === user) {
            sCode(true)
        }
        else {
            sCode(false)
        }


    }, [scourse])



    return (
        <div className="room">
            <RoomHeader {...scourse} />
            <div className="bar">
                <div />
                <SideBarLeft />
                <Middlebar room={room} user={user} other={scourse} />
                {code ? (<div className="coursecode"><p>Course Code</p><span>{room}</span></div>) : null}
                <div />
            </div>
        </div>
    )
}
export default Room;