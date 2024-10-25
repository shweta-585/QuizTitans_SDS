import React, { useState } from 'react';
import '../styles/login.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate();
    const [role, SetRole] = useState("Admin");

    const onSubmit = async (data) => {

        try {
            const response = await axios.post('http://localhost:4000/auth/register', {
                email: data.email,
                password: data.password,
                role: role
            });
            console.log("SignupComponent", response.data);
            navigate('/login');
            setErrMsg("");
        } catch (error) {

            console.log("Registration failed. Please try again..");

            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        setErrMsg("User already exists. Please log in.");
                        break;
                    case 500:
                        setErrMsg("Server error. Please try again later.");
                        break;
                    default:
                        setErrMsg("Unexpected error. Please try again.");
                }
            }
        }
    }

    return (
        <div>
            <div className="login-container">
                <div className="login-box">
                    <form className='login-form' onSubmit={handleSubmit(onSubmit)}>

                        <div className="username">
                            <input {...register("email", { required: true })}
                                type="email"
                                placeholder="Username"
                                className='login-input'
                            />
                            {errors.email && <div>Username is required</div>}
                        </div>

                        <div className="password">
                            <input {...register("password", { required: true, minLength: 6 })}
                                type="password"
                                placeholder="Password"
                                className='login-input'
                            />
                            {errors.password && <div style={{ color: 'white' }}>Password length should be minimum 6</div>}
                        </div>
                        {errMsg && <div style={{ color: 'white', marginBottom: '10px' }}>{errMsg}</div>}

                        <div className="role-decide">
                            <button className='admin-register' type='button' onClick={() => SetRole("Admin")} style={{backgroundColor: role === "Admin" ? 'blue' : 'white'}}>Admin</button>
                            <button className='student-register' type='button' onClick={() => SetRole("Student")} style={{backgroundColor: role === "Student" ? 'blue' : 'white'}}>Student</button>
                        </div>

                        <button className='login-btn' disabled={isSubmitting} type="submit" value="login">Register</button>

                        <div className='signin'>
                            <p>Already have an account? </p>
                            <button onClick={() => navigate('/login')} type="submit" className='signin-btn' >Login</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
