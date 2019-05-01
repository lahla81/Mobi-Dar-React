import React from 'react';
import logo from '../assets/img/logo.jpg';

const Logo = () =>  {
    return(
        <a href="index.html" className="navbar-brand site-logo mr-0">
            <img src={logo}
                width="100px"
                alt="Site Logo"
                className="position-absolute"
            />
        </a>
    );
}
export default Logo;