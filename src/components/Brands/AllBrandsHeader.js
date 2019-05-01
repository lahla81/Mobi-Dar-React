import React from 'react';
import BrandsHeader from './BrandsHeader';
import BrandsHeaderSm from './BrandsHeaderSm';
import VerLogo from './VerLogo';

const AllBrandsHeader = ()=> {
    return(
        <section id="c-brands">
        <div className="container mb-3">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 c-brands">
                    <BrandsHeader />
                    <BrandsHeaderSm />
                </div>
                <div className="col-12 col-md-4 text-center c-ver-ads">
                    <VerLogo />
                </div>
            </div>
        </div>
    </section>
        
    );  
}
export default AllBrandsHeader;
