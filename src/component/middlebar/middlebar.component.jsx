import { useEffect, useState } from "react";
import Assignment from "../assignment/assignment.compont";
import People from "../people/people.component";
import Discusion from "../discussion/discussion.component";

import './middlebar.styles.scss';

const Middlebar = ({ room, user }) => {
    console.log(room, user);

    return (
        <div className="middlebar">
            <Discusion room={room} user={user} />
            <People />
            <Assignment />
        </div>
    )
}
export default Middlebar;