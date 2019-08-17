import React from 'react';
import HeaderData from '../data/headerData.json';

const HeaderText = props => {
	//console.log(props);

	const componentName = props.componentName;
	return (
		<div>
			{/* att nå en property när man inte vet namnet på den [] */}
			{/* bracket notation for refering to a variable!! */}
			<h1>{HeaderData[componentName].heading}</h1>{' '}
			<p>{HeaderData[componentName].text}</p>
		</div>
	);
};

export default HeaderText;
