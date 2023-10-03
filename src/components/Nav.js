import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className='primary-nav'>
                <NavLink to='/' style={({isActive})=>({color: isActive? "Green" : "Black"})}>Home</NavLink>
                <NavLink to='/about' style={({isActive})=>({color: isActive? "Green" : "Black"})}>About</NavLink>
                <NavLink to='/Products' style={({isActive})=>({color: isActive? "Green" : "Black"})}>Product</NavLink>


            </nav>
        </div>
    );
}

export default Nav;
