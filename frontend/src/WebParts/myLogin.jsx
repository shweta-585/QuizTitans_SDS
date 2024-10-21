import { useAuth0 } from '@auth0/auth0-react';
import '../styles/login.css'
import { useForm } from "react-hook-form";

const MyLogin = () => {
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    loginWithRedirect();
  }

  const { user, loginWithRedirect } = useAuth0();
  console.log(user)

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
                { errors.email && <div>Username is required</div> }
            </div>

            <div className="password">
                <input {...register("password", { required: true , minLength: 3})} 
                  type="password" 
                  placeholder="Password" 
                  className='login-input'
                />
                { errors.password && <div style={{color:'white'}}>Password length should be minimum 6</div> }
            </div>

            <button className='login-btn' disabled={isSubmitting} type="submit" value="login">Login</button>
          </form>
        </div>
     </div>
    </>
  )
}

export default MyLogin
