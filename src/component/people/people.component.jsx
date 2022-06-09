import { useState, useEffect } from 'react';
import StudentCardList from '../student-cardlist/studentcardlist.component';

import './people.styles.scss';



const People = ({ room, other }) => {
    //state
    const [peoples, setpeoples] = useState([]);
    //effect
    useEffect(() => {
        fetch(`http://localhost:5000/getpeoplestudent/${room}`)
            .then((res) => res.json())
            .then((data) => setpeoples(data))
    }, [])
    console.log(room)
    console.log(peoples)

    return (
        <div className='people'>
            <h2>Teacher</h2>
            <div className='teacher'>
                <h3>{other.u_name}</h3>
                <span>{other.owner_e}</span>
            </div>
            <div>
                <h3>Student</h3>
                <StudentCardList students={peoples} />
            </div>
        </div>
    )
}
export default People;