import React from 'react';

const OneLink = ({href, name}) => {
    return(
        <li className="nav-item">
            <a href={href} className="nav-link text-primary px-xl-3 px-2">{name}</a>
        </li>              
    );
}
export default OneLink;
