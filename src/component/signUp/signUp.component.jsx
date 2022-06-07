import React, { useState } from "react";
import FormInput from "../form-input/form-input.componet";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './signUp.styles.scss';

const form = {
    name: '',
    email: '',
    role: 'student',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const navigate = useNavigate();

    //redux
    const semail = useSelector((state) => (state.email));
    const dispatch = useDispatch();



    //state    
    const [fields, setfields] = useState(form);
    const { name, email, role, password, confirmPassword } = fields;
    const handleChange = event => {
        const { value, name } = event.target;
        setfields({ ...fields, [name]: value });
        console.log(value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password === confirmPassword && password.length >= 8) {
            try {
                const body = fields;
                const res = await fetch('http://localhost:5000/signup', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });
                dispatch({ type: 'add', payload: email })
                navigate('/course');

            } catch (err) {
                console.error(err);
            }
        }
        else {
            const p = document.querySelector('.sign-up p')
            p.style.display = 'block';

        }
    }
    const selectChange = e => {
        setfields({ ...fields, role: e.target.value });
    }

    return (
        <div className="sign-up">
            <h2>Don't have any account</h2>
            <span>Create Account with filling this fields</span>
            <form onSubmit={handleSubmit} action='#'>
                <FormInput type="text" value={name}
                    name='name'
                    handleChange={handleChange}
                    label='Name'
                    required
                />
                <FormInput type="email" value={email}
                    name='email'
                    handleChange={handleChange}
                    label='Email'
                    required
                />
                <select value={role} id='select' onChange={selectChange}>
                    <option value='student'>Student</option>
                    <option value='teacher'>Teacher</option>
                </select>
                <p className="hide">wrong password!</p>
                <FormInput type="password" value={password}
                    name='password'
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput type="password" value={confirmPassword}
                    name='confirmPassword'
                    handleChange={handleChange}
                    label='ConfirmPassword'
                    required
                />

                <CustomButton type='submit' >Create Account</CustomButton>
            </form>
        </div>
    )
}












export default SignUp;