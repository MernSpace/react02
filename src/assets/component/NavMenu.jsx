import React from 'react';
import { NavLink } from 'react-router-dom';


const NavMenu = () => {
    return (
        <div>
            <ul>
            <li><NavLink className={({isActive})=>isActive?"active-item":"panding-item"} to='/'>Home</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"active-item":"panding-item"} to='/about'>About</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"active-item":"panding-item"} to='/blog'>Blog</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"active-item":"panding-item"} to='/contact'>Contact</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"active-item":"panding-item"} to='/project'>Project</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"active-item":"panding-item"} to='/service'>Service</NavLink></li>
            </ul>
        </div>
    );
};

export default NavMenu;