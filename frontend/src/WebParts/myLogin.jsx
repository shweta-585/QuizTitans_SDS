import { useAuth0 } from '@auth0/auth0-react';
import '../styles/login.css'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { user, loginWithRedirect } = useAuth0();
  const [errMsg, SetErrMsg] = useState('');
  const [isRegistering, SetIsRegistering] = useState(false)

  console.log(user);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        }),
      });

      const contentType = response.headers.get("Content-Type");
      console.log(contentType);

      if (!response.ok) {
        const result = await response.json();
        console.log("Response Error: ", result.message);
        SetErrMsg('Email already exists. SignIn to your account ');
        return;
      }

      if(!isRegistering){
        await loginWithRedirect();
      }else{
        SetErrMsg("Registration successful. Please log in.");
        SetIsRegistering(false);
        navigate('/home');  
      }

      const result = await response.json();
      console.log(result);
      await loginWithRedirect();
    } catch (error) {
      console.error("Error logging in:", error);
      SetErrMsg('Unexpected error');
    }
  }

  return (
    <>
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
                <input {...register("password", { required: true, minLength: 3 })}
                  type="password"
                  placeholder="Password"
                  className='login-input'
                />
                {errors.password && <div style={{ color: 'white' }}>Password length should be minimum 6</div>}
              </div>
              {errMsg && <div style={{ color: 'white', marginBottom: '10px' }}>{errMsg}</div>}

              <button className='login-btn' disabled={isSubmitting} type="submit" value="login">
                {isRegistering ? 'Register' : 'Login'}
              </button>

              <div className='signin'>
                {isRegistering ? (
                  <p>Already have an account? <button type="button" className='signin-btn' onClick={() => SetIsRegistering(false)}>Login</button></p>
                ) : (
                  <p>Don't have an account? <button type="button" className='signin-btn' onClick={() => SetIsRegistering(true)}>Register</button></p>
                )}
              </div>

            </form>
        </div>
      </div>
    </>
  )
}

export default MyLogin
