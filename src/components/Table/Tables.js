import React, { Component } from "react";
import "./Table.scss";
import Sidebar from "../Sidebar";
import HeaderText from "../HeaderText";
import VideoSidebar from "../Video/VideoSidebar";
import { getAnimals } from "./services/animalService";
import { getSpecies } from "./services/speciesService";
import AnimalsTable from "./AnimalsTable";
import Pagination from "./common/Pagination";
import { paginate } from "./utilities/paginate";
import ListGroup from "./common/ListGroup";
import _ from "lodash";

class Tables extends Component {
  state = {
    animals: [],
    species: [],

    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "name", order: "asc" }
  };

  //normally calling backend service, the ajax calls would be here
  //we set them to [] in the state while the data is being fetched for no rumtime error
  componentDidMount() {
    //new array with spread and adding new object
    const species = [{ _id: "", name: "All species" }, ...getSpecies()];
    this.setState({
      animals: getAnimals(),
      species,
      selectedSpeciesItem: species[0] //for first selecting(color:blue) All species
    });
  }

  handleDelete = animal => {
    // console.log("animal", animal);
    //new array that contains all the objects except the one we are deleting
    //keeping the all items that fulfill the condition
    const animals = this.state.animals.filter(a => a._id !== animal._id);
    this.setState({
      animals
    });
  };

  handleLike = animal => {
    //what animal is being liked
    //clone the state
    //finding the index of the movie we recieve as a parameter (indexOf)
    //clone the movie at index-position
    //if true => false and viceversa

    // console.log("toggle-like", animal);
    const animals = [...this.state.animals];
    const index = animals.indexOf(animal);
    // console.log(index);

    animals[index] = { ...animals[index] };
    // console.log("animal at index positon", animals[index]);

    animals[index].liked = !animals[index].liked;
    this.setState({ animals });
  };

  handlePageChange = page => {
    //recieves the new page nr
    //  console.log("page changed", page);
    this.setState({ currentPage: page });
  };

  handleSpeciesSelect = speciesItem => {
    // console.log("species", species);
    //putting selectedSpecies in the state and setting it to the current species
    this.setState({
      selectedSpeciesItem: speciesItem,
      currentPage: 1 //for always begin at 1
    });
  };

  handleSort = sortColumn => {
    this.setState({
      sortColumn
    });
  };

  render() {
    const {
      animals,
      pageSize,
      currentPage,
      species,
      selectedSpeciesItem,
      sortColumn
    } = this.state;

    //1. filtering - if there is a selected species
    //the species of each animal= the selected species
    //otherwise return all animals
    const filteredAnimals =
      selectedSpeciesItem && selectedSpeciesItem._id
        ? animals.filter(a => a.species._id === selectedSpeciesItem._id)
        : animals;

    //2. sorting
    const sortedAnimals = _.orderBy(
      filteredAnimals,
      [sortColumn.path],
      [sortColumn.order]
    );

    //3. pagination
    const animalsPaginated = paginate(sortedAnimals, currentPage, pageSize);

    let textmessage;
    animals === 0 ? (textmessage = <p>There are no animals left</p>) : (textmessage = "");
    return (
      <div className="row">
        <div className="col-12">
          <div className="table-section">
            <header>
              <HeaderText componentName={this.constructor.name} />
            </header>

            <div className="row">
              <div className="col-12">
                <ListGroup
                  items={species}
                  selectedItem={selectedSpeciesItem}
                  onItemSelect={this.handleSpeciesSelect}
                />
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="col-12">
                <div className="tableAnimals">
                  {textmessage}

                  <AnimalsTable
                    animals={animalsPaginated}
                    onLike={this.handleLike}
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}
                    sortColumn={sortColumn}
                  />
                  <Pagination
                    itemsTotal={filteredAnimals.length}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={currentPage}
                  />
                </div>
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
export default Tables;
