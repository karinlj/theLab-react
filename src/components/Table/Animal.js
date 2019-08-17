import React, { Component } from 'react';
import './Table.scss';
import Sidebar from '../Sidebar';
import HeaderText from '../HeaderText';
import VideoSidebar from '../Video/VideoSidebar';
import { getAnimals } from './services/animalService';
import Elephant from '../../img/elephant-big.jpg';
//import _ from 'lodash';

class Animal extends Component {
	state = {
		animals: getAnimals(),
		id: null, //null from start
		animal: ''
	};
	componentDidMount() {
		console.log(this.props);
		//hämta id:t från url:en
		let id = this.props.match.params.id;
		console.log('my url-id', id);

		const animal = this.state.animals.find((a) => {
			return a._id === id;
		});
		console.log('my animal', animal);

		this.setState({
			id: id,
			animal: animal
		});
	}

	render() {
		//let { animal } = this.state;
		let animal = this.state.animal;
		console.log('my animal in render', animal);

		return (
			<div className="row">
				<div className="col-12">
					<div className="table-section">
						<header>
							{/* <HeaderText componentName={this.constructor.name} /> */}
						</header>

						<div className="row">
							<div className="col-2">
								<img src={Elephant} alt="" />
							</div>
							<div className="col">
								<ul className="singleanimal">
									<li>
										<span>Name: </span>
										{animal.name}
									</li>
									<li>
										{/* <span>Species: </span> {animal.species.name} */}
									</li>
									<li>
										<span>Shoesize: </span>
										{animal.shoesize}
									</li>
									<li>
										<span>Hairdo: </span>
										{animal.hairdo}
									</li>
								</ul>
							</div>
						</div>

						<div className="row">
							<div className="col-12 col-md-6">
								{/* <Sidebar componentName={this.constructor.name} /> */}
							</div>
							<div className="col-12 col-md-6">
								<VideoSidebar
									src="https://www.youtube.com/embed/YcCw6cS7Uy0"
									height="230"
									width="100%"
									title="getting-started"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Animal;
