import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderInput = ({searchChange}) => {
    return(
        <div className="row">
            <div className="col-xl-7 col-lg-9 col-md-11 col-sm-12 col-12 mx-auto">
                <div className="input-group shadow-around rounded">
                    {/* <div className="input-group-append cursor-pointer">
                        <span id="search-addon"
                            className="input-group-text bg-white border-left-0 rounded-right border-medium">
                            <button type="submit" className="btn border-0 bg-white p-0">
                            <FontAwesomeIcon icon="search"/>
                            </button>
                        </span>
                    </div> */}
                    <input type="search"
                        id="search-field"
                        className="form-control py-1 py-sm-2 rounded-lg border-lg text-left"
                        placeholder=".... Search for Mobile"
                        aria-label="إبحث عن موبيل..."
                        aria-describedby="search-addon"
                        onChange = {searchChange}
                    />
                </div>
            </div>
        </div>
    );
}
export default HeaderInput;
