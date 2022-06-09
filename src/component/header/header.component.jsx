import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import './header.style.scss';



const Header = () => {
    const sign1 = useSelector((state) => (state.sign));
    const semail = useSelector((state) => (state.email));
    const [userd, setuserd] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/dis/${semail}`)
            .then((res) => res.json())
            .then((data) => setuserd(...data));
    }, [semail]);
    console.log('user  =>', userd)
    let navigate = useNavigate();
    const sign = () => {
        let path = '/';
        navigate(path);
    }
    const root = () => {
        navigate('/course');
    }
    const profile = () => {
        navigate('/profile');
    }

    return (
        <div className="div-header">
            <div>
                <div className="logo">

                </div>
                <h1 className="header" onClick={root}>DigitalClassRoom</h1>
            </div>
            {
                sign1 ? (<span className="header" onClick={profile}>{userd.u_name}</span>) : (<span className="header" onClick={sign}>Sign in/Sign up</span>)
            }

        </div >
    );
}
export default Header;