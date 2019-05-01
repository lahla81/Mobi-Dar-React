import React from 'react';
import AllBrandsIcons from './AllBrandsIcons';
import { brands } from './brands.js';

const BrandsHeader = ()=> {
    return(
        <AllBrandsIcons brands = {brands} />
    );  
}
export default BrandsHeader;
