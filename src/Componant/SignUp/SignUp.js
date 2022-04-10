import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const SignUp = () => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [confirmPassword,setConfirmPassword]=useState('')
const [error,setError]=useState('')
const navigate=useNavigate()

const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)

const handelEmail=e=>{
setEmail(e.target.value);
}
const handelPassword=e=>{
    setPassword(e.target.value);
}
const handelConfirmPassword=e=>{
    setConfirmPassword(e.target.value);
}

if(user){
navigate('/')
}
const handelCreateUser=e=>{
    e.preventDefault()
    if(password!==confirmPassword){
        setError('Your two passwords did not match .')
        return
    }
    if(password.length<6){
        setError('Password must be 6 characters or longer .')
        return;
    }
    createUserWithEmailAndPassword(email, password)
    // .then(result =>{
    //     const user =result.user
    //     console.log(user)
    // })
}
    return (
        <div className="form-container">
      <div>
        <h2 className="from-title">Sign Up</h2>
        <form onSubmit={handelCreateUser}>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input onBlur={handelEmail} type="email" name="email" placeholder="" required></input>
          </div>
          <div className="input-group">
            <label htmlFor="password"> Password</label>
            <input onBlur={handelPassword} type="password" name="password" placeholder="" required></input>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onBlur={handelConfirmPassword} type="password" name="confirm-password" placeholder="" required></input>
          </div>
          <p style={{color: 'red',fontSize:'20px'}}>{error}</p>
          <input type="submit" value="Sign Up" className="from-submit" />
        </form>
        <p>
            Already Have an account ? <Link className='form-link' to='/login'>Login </Link>
        </p>
      </div>
    </div>
    );
};

export default SignUp;