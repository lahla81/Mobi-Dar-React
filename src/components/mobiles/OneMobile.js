import React from 'react';

const OneMobile = ({name,img,slug,brand}) => {
    return(
        <div className="col-sm-4 col-lg-2 col-6 c-latest__section">
            <div className="c-latest__overlay">
                <a className="text-center c-latest__right" href={slug}>
                    <h4 className="font-body-bold text-secondary my-1">{brand}</h4>
                    <img className="mt-2" src={img} alt={slug}/>
                    <div className="h4 my-2 font-body-bold ltr">{name}</div>
                </a>
            </div>
        </div>             
    );
}
export default OneMobile;
