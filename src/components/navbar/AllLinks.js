import React from 'react';
import OneLink from './OneLink';

const AllLinks = ({ links }) => {
	const AllLinks = links.map((user) => {
		return <OneLink key={user.id} name={user.name} href={user.href} />
	});
	return(
		<ul className="nav navbar primary-menu flex-column flex-lg-row">
			{AllLinks}
		</ul>
	)
}
export default AllLinks;