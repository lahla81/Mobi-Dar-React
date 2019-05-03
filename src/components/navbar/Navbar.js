import React, { Component } from 'react';
import Logo from './Logo';
import BarButton from './BarButton';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton';
// import AllLinks from './AllLinks';
// import { links } from './links.js';

class Navbar extends Component {
    render(){
        return(
            <header className="site-header border-bottom bg-white fixed-top py-lg-0 py-3">
                <div className="container">
                    <nav className="navbar navbar-expand-lg font-body-bold px-0 position-relative">
                        <Logo />
                        <BarButton />
                        <div className="collapse navbar-collapse justify-content-end" id="top-navigation">
                            {/* <AllLinks links={links}/> */}
                            <div className="client-area mt-lg-0 mt-md-2 mt-sm-0 d-flex justify-content-center">
                                <RegisterButton />
                                <LoginButton />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }   
}
export default Navbar;
