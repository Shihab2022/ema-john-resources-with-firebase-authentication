import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="from-title">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input type="email" name="email" placeholder="" required></input>
          </div>
          <div className="input-group">
            <label htmlFor="password"> Password</label>
            <input type="password" name="password" placeholder="" required></input>
          </div>
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
