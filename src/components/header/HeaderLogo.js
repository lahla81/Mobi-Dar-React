import React from 'react';
import logo from '../assets/img/logo.jpg';

const HeaderLogo = () => {
    return(
        <div className="main-header pt-5 position-relative">
            <div className="main-header-bg w-100 h-100"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-12">
                        <div className="mt-4 py-3 py-md-4 py-lg-5">
                            <div className="text-center">
                                <a href="/">
                                    <img src={logo}
                                    width="10%"
                                    alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>            
    );
}
export default HeaderLogo;
