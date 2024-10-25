import { useAuth0 } from '@auth0/auth0-react';
import '../styles/login.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyLogin = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { loginWithPopup } = useAuth0();
  const [errMsg, SetErrMsg] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email: data.email,
        password: data.password
      });

      console.log(response.data.role);

      if (response.data.message === "Success") {
        console.log("Backend login successful, proceeding with Auth0...");
        if( response.data.role === "Admin" ){
          navigate('/admin-dashboard');
        }
        else{
          navigate('/student-dashboard');
        }
        await loginWithPopup();
      }
      else if (response.data.message === "The password is incorrect") {
        SetErrMsg("Incorrect password");
        console.log("Incorrect password");
      }
      else {
        SetErrMsg("You are not registered to this service. Please register.");
        navigate("/register");
      }

    } catch (error) {
      console.log("Error logging in", error);
      SetErrMsg('Unexpected error during login');
    }
  };
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     if (role === "Admin") {
  //       navigate("/admin-dashboard");
  //     } else if (role) {
  //       navigate("/student-dashboard");
  //     }
  //   }
  // }, [isAuthenticated, navigate]);

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

          <button className='login-btn' disabled={isSubmitting}>Login</button>

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
