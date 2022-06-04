import './profile.styles.scss';
import { useState, useEffect } from 'react';
import FormInput from '../form-input/form-input.componet';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((state) => state.email)
    //state
    const [profile, setProfile] = useState({});
    //effect
    useEffect(() => {
        fetch(`http://localhost:5000/dis/${user}`)
            .then((res) => res.json())
            .then((data) => setProfile(...data))
        console.log('render')
    }, [])
    console.log(user)
    console.log(profile)
    //function
    return (
        <div className="profile">
            <h1>Profile</h1>
            <h2>Name : {profile.u_name}</h2>
            <p>Email : {profile.u_email}</p>
            <p>role : {profile.u_role}</p>
            <div>
                <p>change password</p>

            </div>

        </div>
    )
}
export default Profile;