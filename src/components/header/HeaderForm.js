import React from 'react';
import HeaderInput from './HeaderInput';
import HeaderTitle from './HeaderTitle';

const HeaderForm = ({searchChange}) => {
    return(
        <div className="container">
            <form className="search-form ">
                <div className="form-group">
                    <HeaderTitle />
                    <HeaderInput searchChange = {searchChange}/>
                </div>
            </form>
        </div>          
    );
}
export default HeaderForm;
