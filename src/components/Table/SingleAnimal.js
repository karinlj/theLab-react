import React, { Component } from 'react';
import './Table.scss';
import Sidebar from '../Sidebar';
import HeaderText from '../HeaderText';
import VideoSidebar from '../Video/VideoSidebar';
import { getAnimals } from './services/animalService';
import { getSpecies } from './services/speciesService';
import AnimalsTable from './AnimalsTable';
import Elephant from '../../img/elephant-big.jpg';

import _ from 'lodash';

class SingleAnimal extends Component {
	state = {};

	//normally calling backend service, the ajax calls would be here
	//we set them to [] in the state while the data is being fetched for no rumtime error
	componentDidMount() {}

	render() {
		const { animals } = this.state;

		return (
			<div className="row">
				<div className="col-12">
					<div className="table-section">
						<header>
							<HeaderText componentName={this.constructor.name} />
						</header>

						<div className="row">
							<div className="col-2">
								<img src={Elephant} alt="" />
							</div>
							<div className="col">
								<ul className="singleanimal">
									<li>
										<span>Name: </span>Arthur
									</li>
									<li>
										<span>Species: </span>elephant
									</li>
									<li>
										<span>Shoesize: </span>xl
									</li>
									<li>
										<span>Hairdo: </span>bald
									</li>
								</ul>
							</div>
						</div>

						<div className="row">
							<div className="col-12 col-md-6">
								<Sidebar componentName={this.constructor.name} />
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
export default SingleAnimal;
