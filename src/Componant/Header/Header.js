import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const [user]=useAuthState(auth)
    const handleSingOut=()=>{
        signOut(auth)
    }
    return (
        <div className="header">
           <nav className="header-menu">
                <img src={Logo} alt="" />
                <div>
                    <Link to="/"> Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                   {user? 
                   <Link to='/login'>
          <button onClick={handleSingOut}>Sign out</button>
                   </Link>
         
                   :                  
                   <Link to='/login'>Login</Link>
                   }
                </div>

           </nav>
        </div>
    );
};

export default Header;