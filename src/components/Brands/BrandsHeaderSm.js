import React from 'react';
import AllBrandIconSm from './AllBrandIconsSm';
import { brands } from './brands.js';

const BrandsHeader = ()=> {
    return(
        <AllBrandIconSm brands = {brands} />
    );  
}
export default BrandsHeader;
