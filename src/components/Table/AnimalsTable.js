import React, { Component } from 'react';
import Like from './common/Like';
import { NavLink } from 'react-router-dom';

class AnimalsTable extends Component {
	//columns for sorting th
	columns = [
		{ key: 'image' },
		{ path: 'name', label: 'Name' },
		{ path: 'species.name', label: 'Species' },
		{ path: 'shoesize', label: 'Shoesize' },
		{ path: 'hairdo', label: 'Hairdo' },
		{ key: 'like' },
		{ key: 'delete' }
	];

	raiseSort = (path) => {
		//console.log('path', path);
		//clone the state prop
		const sortColumn = { ...this.props.sortColumn };
		//if path is the same
		if (sortColumn.path === path) {
			//condition stored in variable
			sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
		} else {
			sortColumn.path = path;
			sortColumn.order = 'asc';
		}

		//raise the sort event
		this.props.onSort(sortColumn); //vad gör jag här??
	};

	renderSortIcon = (column) => {
		const { sortColumn } = this.props;

		//if this column is not sorted
		if (column.path !== sortColumn.path) return null;
		//otherwise: return diff icons depending on sort order
		if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc" />;
		return <i className="fa fa-sort-desc" />;
	};

	render() {
		const { animals, onDelete, onLike } = this.props;

		return (
			<table id="animalTable" className="table">
				<thead>
					<tr>
						{this.columns.map((column) => (
							<th
								key={column.path || column.key}
								onClick={() => this.raiseSort(column.path)}
							>
								{column.label}
								{this.renderSortIcon(column)}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{animals.map((animal) => (
						//id set here
						<tr key={animal._id}>
							<td>
								{/*  <img src={Lion} alt="" /> */}
								<img
									src={require(`../../img/${animal.image}.jpg`)}
									alt={animal.image}
								/>
							</td>
							<td>
								<NavLink to={'/animal/' + animal._id}>
									{animal.name}
								</NavLink>
							</td>
							<td>{animal.species.name}</td>
							<td>{animal.shoesize}</td>
							<td>{animal.hairdo}</td>
							<td>
								<Like
									/* liked={true} */
									liked={animal.liked}
									onLikeToggle={() => onLike(animal)}
								/>
							</td>
							<td>
								<button
									onClick={() => onDelete(animal)}
									className="btn btn-danger btn-sm"
								>
									<i className="fa fa-trash" aria-hidden="true" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}
export default AnimalsTable;
