/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './Signup.css'
const Signup = ({ signup, setSignup, setLogin }) => {
  return (
    <div className={signup ? 'signup-container active' : 'signup-container'}>
      <form className={signup ? 'signup active' : 'signup'}>
        <AiOutlineClose onClick={() => setSignup(false)} className='signup-x' />
        <h1 className='signup-title'>Sign up</h1>
        <div className='signup-inputs'>
          <input type='text' placeholder='Phone Number or Email' required />
          <input type='password' placeholder='Full Name' required />
          <input type='password' placeholder='Password' required />
        </div>
        <button className='signup-btn'>Sign up</button>
        <span>
          <hr /> <p>OR</p> <hr />
        </span>
        <div className='signup-acc'>
          <p>Have an account?</p>
          <a
            onClick={() => {
              setSignup(false)
              setTimeout(() => setLogin(true), 300)
            }}
          >
            Login
          </a>
        </div>
      </form>
    </div>
  )
}

export default Signup
