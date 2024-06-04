// src/components/SignIn.js
import React, { useState } from 'react';
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword } from './firebase';
import './SignIn.css';

const SignIn = () => {
  const [user, setUser] = useState({
    Email: '',
    password: ''
  });

  let name,value 
console.log(user)
  
const data =(e) =>
  {
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
  } 
const getdata=(e) =>
  {
    const {Email,password} =user;
    e.preventDefault();
    const options ={
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        Email,password
      })
    }
    const res=fetch('https://mysite01-39f88-default-rtdb.firebaseio.com/UserData.json',
      options
    )
    if (res)
      {
        alert("Data saved")
      }
    else
    {
      alert("Error occured")
    }

  }

 
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Signed in with Google successfully!');
    } catch (error) {
      alert('Error signing in with Google: ' + error.message);
    }
  };

  return (
    <>
      <div className='signin-container'>
        <div className='signin-box'>
          <h1>Sign-In</h1>
          <form method='POST' onSubmit={getdata}>
            <input
              type='text'
              name='Email'
              placeholder="Email"
              value={user.Email}
              autoComplete='off'
              required
              onChange={data}
            />
            <input
              type='password'
              name='password'
              placeholder="Password"
              value={user.password}
              autoComplete='off'
              required
              onChange={data}
            />
             
            <div className='button-container'>
              <button type="submit">SIGN IN</button>
            </div>
            <div className='or'>OR</div>
            
            <div className='button-container2'>
              <button type="button" onClick={handleGoogleSignIn}>SIGN IN WITH GOOGLE</button>
            </div>
           
            <div className='button-container3'>
              <button type="button">LOGOUT</button>
            </div>
           
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
