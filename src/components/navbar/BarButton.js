import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BarButton = () =>  {
    return(
        <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#top-navigation"
            aria-controls="top-navigation"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <FontAwesomeIcon icon="bars"/>
        </button>
    );
}
export default BarButton;