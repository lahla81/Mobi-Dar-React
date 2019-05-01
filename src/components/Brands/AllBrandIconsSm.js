import React from 'react';
import OneBrandSm from './OneBrandSm';

const AllBrandSm = ({ brands }) => {
	const fourBrands1 = brands.slice(0, 4).map((brand) => {
		return <OneBrandSm key={brand.id} name={brand.name} href={brand.href} src={brand.src}/>
    });
    const fourBrands2 = brands.slice(4, 8).map((brand) => {
		return <OneBrandSm key={brand.id} name={brand.name} href={brand.href} src={brand.src}/>
    });
    const fourBrands3 = brands.slice(8, 12).map((brand) => {
		return <OneBrandSm key={brand.id} name={brand.name} href={brand.href} src={brand.src}/>
    });
    const fourBrands4 = brands.slice(12, 16).map((brand) => {
		return <OneBrandSm key={brand.id} name={brand.name} href={brand.href} src={brand.src}/>
	});
	return(
        <table className="c-brands__table--sm">
            <tbody>
                <tr className="c-brands__tr--sm">
                    {fourBrands1}
                </tr>
                <tr className="c-brands__tr--sm">
                    {fourBrands2}
                </tr>
                <tr className="c-brands__tr--sm">
                    {fourBrands3}
                </tr>
                <tr className="c-brands__tr--sm">
                    {fourBrands4}
                </tr>
            </tbody>
        </table>
	);
}
export default AllBrandSm;