import React from 'react';
import OneMobile from './OneMobile';

const SamsungMobiles = ({ mobiles }) => {
	const samsung = mobiles.map((mobile,i) => {
		return <OneMobile key={i} name={mobile.name} img={mobile.image} slug={mobile.slug} brand={mobile.Brand}/>
	});

	return(
		<section id="c-latest" className="mt-4">
            <div className="c-latest__head">
                <div className="font-body-bold mr-4 mb-1 mt-3 text-center">
                    <a className="h3 c-title" href="#latest">
                        SAMSUNG MOBILES
                    </a>
                </div>
                <div className="row c-latest__row">
                    {samsung}
                </div>
            </div>
        </section> 
	)
}
export default SamsungMobiles;