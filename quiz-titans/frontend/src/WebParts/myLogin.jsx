import React, { useState } from 'react'
import '../styles/login.css'

const MyLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="container">
        <div className="login-box">
            <form onSubmit={handleSubmit}>
                <div className="username">
                    <input type="email" placeholder="Username" className='form-input' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="password">
                    <input type="password" placeholder="Password" className='form-input' onChange={e => setPassword(e.target.value)}/>
                </div>
                <button type="submit" value="login">Login</button>
            </form>
        </div>
     </div>
    </>
  )
}

export default MyLogin
