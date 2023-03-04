import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const[err, setErr]= useState(false);
  const navigate= useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email,password)
      navigate("/");
    } catch (err) {
      setErr(true);
      
    }
  }

  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <div className="logo">Lama Chat</div>
        <div className="title">Login</div>
        <form onSubmit={ handleSubmit }>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <button>Sign In</button>
            {err && <p>Something went to wrong</p>}
        </form>
        <p>You don't have an account? <Link to='/register' >Register</Link></p>
      </div>
    </div>
  )
}

export default Login
