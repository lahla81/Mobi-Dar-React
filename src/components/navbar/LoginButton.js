import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginButton = () =>  {
    return(
        <a href="login.html"
            className="btn btn-primary px-3 px-sm-4 mr-2">
            <FontAwesomeIcon icon="sign-in-alt"/>
        </a>
    );
}
export default LoginButton;