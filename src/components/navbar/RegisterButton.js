import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegisterButton = () =>  {
    return(
        <a href="register.html"
            className="btn btn-outline-primary px-3 px-sm-4 ml-2">
            <FontAwesomeIcon icon="user-plus"/>
            <i className="fa fa-user-plus"></i>
        </a>
    );
}
export default RegisterButton;