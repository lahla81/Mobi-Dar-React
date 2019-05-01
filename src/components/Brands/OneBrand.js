import React from 'react';

const OneBrand = ({href, src, name}) => {
    return(
        <td className="c-brands__td">
            <a className="c-btn c-brands__sub--brand paper paper-raise" href={href}>
                <img src={src} alt={name}/>
            </a>
        </td>             
    );
}
export default OneBrand;