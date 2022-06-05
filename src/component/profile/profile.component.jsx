import './profile.styles.scss';
import { useState, useEffect } from 'react';
import FormInput from '../form-input/form-input.componet';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { useNavigate } from 'react-router-dom';



const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //selector
    const user = useSelector((state) => state.email)
    //state
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('')
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
    const handleChange = (e) => {
        setPassword(e.target.value)
    }
    const handleChange2 = (e) => {
        setCPassword(e.target.value)
    }
    const signOut = () => {
        dispatch({ type: 'signout' });
        navigate('/')
    }
    return (
        <div className="profile">
            <h1>Profile</h1>
            <h2>Name : {profile.u_name}</h2>
            <p>Email : {profile.u_email}</p>
            <p>Role : {profile.u_role}</p>
            <div>
                <p>Change Password</p>
                <form action="">
                    <FormInput type="text" value={password}
                        name='password'
                        handleChange={handleChange}
                        label='Enter Password'
                        required
                    />
                    <FormInput type="text" value={cPassword}
                        name='cpassword'
                        handleChange={handleChange2}
                        label='Enter Confirm Password'
                        required
                    />
                    <CustomButton>Change Password</CustomButton>
                </form>
                <button id='sign-out' onClick={signOut}>Sign out</button>

            </div>

        </div>
    )
}
export default Profile;