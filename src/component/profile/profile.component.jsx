import './profile.styles.scss';


import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((state) => state.email)
    return (
        <div className="prfile">
            profile
            <h1>{user}</h1>
        </div>
    )
}
export default Profile;