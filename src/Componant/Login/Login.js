import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link ,useNavigate} from 'react-router-dom';
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
const navigate=useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleEmail=e=>{
        setEmail(e.target.value);
    }
    const handelPassword=e=>{
        setPassword(e.target.value);
    }
    if(user){
navigate('/')
    }
    const handelUserSingIn=e=>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password);


    }

  return (
    <div className="form-container">
      <div>
        <h2 className="from-title">Login</h2>
        <form onSubmit={handelUserSingIn}>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input onBlur={handleEmail} type="email" name="email" placeholder="" required></input>
          </div>
          <div className="input-group">
            <label htmlFor="password"> Password</label>
            <input onBlur={handelPassword} type="password" name="password" placeholder="" required></input>
          </div>
          <p style={{color:'red'}}>{error?.message}</p>
          <p>{loading && 'Loading.......'}</p>
          <input type="submit" value="Login" className="from-submit" />
        </form>
        <p>
            New to Ema-John ? <Link className='form-link' to='/singUp'>Create new account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
