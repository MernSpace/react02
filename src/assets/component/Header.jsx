import React from 'react';
import NavMenu from './NavMenu';
import '../css/header.css'

const Header = () => {
    const onClick=()=>{
        alert("this not work")
    }
    return (
        <div>
            <div className="main">
                <div className="logo"><h1>saharul sifat</h1></div>
                <div className="nav">
                    <NavMenu/>
                </div>
                <div className="btn">
                    <button onClick={onClick}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;