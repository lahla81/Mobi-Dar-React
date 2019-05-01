import React from 'react';
import OneBrand from './OneBrand';

const AllBrandsIcons = ({ brands }) => {
	const eightBrands1 = brands.slice(0, 8).map((brand) => {
		return <OneBrand key={brand.id} name={brand.name} href={brand.href} src={brand.src}/>
	});
	const eightBrands2 = brands.slice(8, 16).map((brand) => {
		return <OneBrand key={brand.id} name={brand.name} href={brand.href} src={brand.src}/>
	});
	return(
		<table className="c-brands__table">
			<tbody>
				<tr className="c-brands__tr">
					{eightBrands1}
				</tr>
				<tr className="c-brands__tr">
					{eightBrands2}
				</tr>
			</tbody>
        </table>
	)
}
export default AllBrandsIcons;