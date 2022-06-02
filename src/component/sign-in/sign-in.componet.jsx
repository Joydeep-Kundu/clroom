import { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.componet";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.style.scss';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const sForm = {
    email: "",
    password: ''
}

const SignIn = () => {
    let navigate = useNavigate();
    //redux
    const semail = useSelector((state) => (state.email));
    const dispatch = useDispatch();


    const [fields, setFields] = useState(sForm);
    const { email, password } = fields;
    const [mat, setmat] = useState([]);
    console.log('render');

    const handleChange = event => {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value })
    };
    const naviga = () => {
        let i = 0;
        while (i < 3) {
            navigate('/course');
            i += 1;
        }
    }
    const disall = async () => {
        try {
            const res = await fetch('http://localhost:5000/disall');
            const data = await res.json();
            console.log(data);
            setmat(data);
        } catch (err) {
            console.err(err);
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        disall();

        let l;
        mat.map((m) => {
            l = 1;
            if (m.u_email === email) {
                if (m.u_password === password) {
                    console.log(semail)
                    dispatch({ type: 'add', payload: email })
                    naviga();
                    setFields({ email: '', password: '' });
                }
                l = 0;
                console.log(password, 'wrong password');
            }

        })
        if (l === 1) {

            console.log('wrong email');
        }
    };


    return (
        <div className="sign-in" onSubmit={handleSubmit}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form methode='post' action='#'>
                <FormInput type="email" value={email}
                    name='email'
                    handleChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput type="password" value={password}
                    name='password'
                    handleChange={handleChange}
                    label='Password'
                    required
                />

                <CustomButton type='submit' >SIGN IN</CustomButton>

            </form>
        </div >
    )

}





export default SignIn;