import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
           <nav className="header-menu">
                <img src={Logo} alt="" />
                <div>
                    <Link to="/"> Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    <Link to='/login'>Login</Link>
                </div>

           </nav>
        </div>
    );
};

export default Header;