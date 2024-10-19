import React from 'react'
import '../styles/login.css'

const MyLogin = () => {
  return (
    <>
      <div className="container">
        <div className="login-box">
            <div className="title">
                <h2>Login Page</h2>
            </div>
            <form>
                <div className="username">
                    <input type="email" placeholder="Username"/>
                </div>
                <div className="password">
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="submit">
                    <input type="submit" value="login" />
                </div>
            </form>
        </div>
     </div>
    </>
  )
}

export default MyLogin
