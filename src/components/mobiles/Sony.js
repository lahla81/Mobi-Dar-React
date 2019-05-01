import React from 'react';
import OneMobile from './OneMobile';

const SonyMobiles = ({ mobiles }) => {
	const sony = mobiles.map((mobile,i) => {
		return <OneMobile key={i} name={mobile.name} img={mobile.image} slug={mobile.slug} brand={mobile.Brand}/>
	});

	return(
		<section id="c-latest" className="mt-4">
            <div className="c-latest__head">
                <div className="font-body-bold mr-4 mb-1 mt-3 text-center">
                    <a className="h3 c-title" href="#latest">
                        SONY MOBILES
                    </a>
                </div>
                <div className="row c-latest__row">
                    {sony}
                </div>
            </div>
        </section> 
	)
}
export default SonyMobiles;