import React from 'react';

const AddAnimal = (props) => {
	//input: state -inputName etc
	//events: onChange, onSubmit
	const {
		inputName,
		inputShoesize,
		inputSpecies,
		inputHairdo,
		onInputChange,
		onFormSubmit
	} = props;

	return (
		<div>
			<form className="todo-form" onSubmit={onFormSubmit}>
				<label htmlFor="">Add new Animal:</label>
				<br />
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					onChange={onInputChange}
					value={inputName}
				/>
				<label htmlFor="species">Species</label>
				<input
					type="text"
					name="species"
					onChange={onInputChange}
					value={inputSpecies}
				/>
				<label htmlFor="shosize">Shosize</label>
				<input
					type="text"
					name="shosize"
					onChange={onInputChange}
					value={inputShoesize}
				/>
				<label htmlFor="hairdo">Hairdo</label>
				<input
					type="text"
					name="hairdo"
					onChange={onInputChange}
					value={inputHairdo}
				/>
			</form>
		</div>
	);
};

export default AddAnimal;
