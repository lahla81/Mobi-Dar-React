import React from 'react';
import VerLogo from '../assets/img/logo-ver.jpg';

const verlogo = () =>  {
    return(
        <a href="/">
            <img className="p-2" src={VerLogo} height="100%" alt="Logo"/>
        </a>
    );
}
export default verlogo;