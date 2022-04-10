import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="form-container">
      <div>
        <h2 className="from-title">Sign Up</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input type="email" name="email" placeholder="" required></input>
          </div>
          <div className="input-group">
            <label htmlFor="password"> Password</label>
            <input type="password" name="password" placeholder="" required></input>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" name="confirm-password" placeholder="" required></input>
          </div>
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