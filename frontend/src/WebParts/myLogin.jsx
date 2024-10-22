import { useAuth0 } from '@auth0/auth0-react';
import '../styles/login.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyLogin = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { loginWithRedirect } = useAuth0();  // Auth0 login function
  const [errMsg, SetErrMsg] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {

      const response = await axios.post("http://localhost:4000/auth/login", {
        email: data.email, 
        password: data.password
      });

      if (response.data === "Success") {
        console.log("Backend login successful, proceeding with Auth0...");
        await loginWithRedirect();
        navigate("/home");
      } 
      else if( response.data === "The password is incorrect") {
        SetErrMsg("Incorrect password");
        console.log("Incorrect password");
      }
      else {
        SetErrMsg("You are not registered to this service. Please register.");
        navigate("/register");
      }

    } catch (error) {
      console.log("Error loggin in", error);
      SetErrMsg('Unexpected error during login');
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
          <div className="username">
            <input {...register("email", { required: true })}
              type="email"
              placeholder="Email"
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
            {errors.password && <div style={{ color: 'white' }}>Password length should be at least 6 characters</div>}
          </div>

          {errMsg && <div style={{ color: 'white', marginBottom: '10px' }}>{errMsg}</div>}

          <button className='login-btn' disabled={isSubmitting} type="submit">Login</button>

          <div className='signin'>
            <p>Don't have an account? </p>
            <button onClick={() => navigate('/register')} type="button" className='signin-btn'>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyLogin;
