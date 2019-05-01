import React from 'react';

const OneBrandSm = ({src, href, name}) => {
    return(
        <td className="c-brands__td--sm">
            <a className="c-btn c-brands__sub--brand--sm paper paper-raise" href={href}>
                <img src={src} alt={name}/>
            </a>
        </td>             
    );
}

export default OneBrandSm;