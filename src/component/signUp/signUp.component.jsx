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
        if (password === confirmPassword) {
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
            console.log('pass')

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
                <select value={role} onChange={selectChange}>
                    <option value='student'>Student</option>
                    <option value='teacher'>Teacher</option>
                </select>
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














// class SignUp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             role: 'student',
//             password: '',
//             confirmPassword: ''
//         }
//     }
//     handleChange = event => {
//         const { value, name } = event.target;
//         this.setState({ [name]: value })
//         console.log(value)
//     }
//     handleSubmit = async (event) => {
//         event.preventDefault();
//         if (this.state.password === this.state.confirmPassword) {
//             this.setState({ name: '', email: '', role: 'student', password: '', confirmPassword: '' });
//             try {
//                 const body = this.state;
//                 const res = await fetch('http://localhost:5000/signup', {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(body)
//                 });
//                 global.sign = this.state.email;
//                 window.location = '/course';

//             } catch (err) {
//                 console.error(err.message);

//             }
//         }
//         else {

//         }
//     }
//     selectChange = e => {
//         this.setState({ role: e.target.value });
//     }
//     render() {
//         return (
//             <div className="sign-up">
//                 <h2>Don't have any account</h2>
//                 <span>Create Account with filling this fields</span>
//                 <form onSubmit={this.handleSubmit} action='#'>
//                     <FormInput type="text" value={this.state.name}
//                         name='name'
//                         handleChange={this.handleChange}
//                         label='Name'
//                         required
//                     />
//                     <FormInput type="email" value={this.state.email}
//                         name='email'
//                         handleChange={this.handleChange}
//                         label='Email'
//                         required
//                     />
//                     <select value={this.setState.role} onChange={this.selectChange}>
//                         <option value='student'>Student</option>
//                         <option value='teacher'>Teacher</option>
//                     </select>
//                     <FormInput type="password" value={this.state.password}
//                         name='password'
//                         handleChange={this.handleChange}
//                         label='Password'
//                         required
//                     />
//                     <FormInput type="password" value={this.state.confirmPassword}
//                         name='confirmPassword'
//                         handleChange={this.handleChange}
//                         label='ConfirmPassword'
//                         required
//                     />

//                     <CustomButton type='submit' >Create Account</CustomButton>
//                 </form>
//             </div>
//         )
//     }
// };
export default SignUp;