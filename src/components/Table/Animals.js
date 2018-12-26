import React, { Component } from "react";

import { getAnimals } from "./services/animalService"; //import getAnimals-func
import { getSpecies } from "./services/speciesService";
import AnimalsTable from "./AnimalsTable";
import Pagination from "./common/Pagination";
import { paginate } from "./utilities/paginate";
import ListGroup from "./common/ListGroup";
import _ from "lodash";

class Animals extends Component {
  //displaying a list of animals
  state = {
    animals: [],
    pageSize: 4,
    currentPage: 1,
    species: [],
    // selectedSpecies: ""
    sortColumn: {
      path: "name",
      order: "asc"
    }
  };

  //normally calling backend service, so here the ajax calls would be
  //we set them to [] in the state while the data is being fetched for not having a rumtime error
  componentDidMount() {
    //new array with spread and adding new object
    const species = [{ _id: "", name: "All species" }, ...getSpecies()];
    this.setState({
      movies: getAnimals(),
      species
    });
  }

  handleDelete = animal => {
    // console.log(animal);

    //new array that contains all the objects except the one we are deleting
    //keeping the items that fullfil the condition
    const animals = this.state.animals.filter(a => a._id !== animal._id);
    this.setState({
      animals
    });
  };

  handleLike = animal => {
    //parameter to know what movie is being liked
    // console.log("liked", animal);

    //make a copy of the state, and give it to the setState
    const animals = [...this.state.animals];
    //finding the index of the movie we recieve as a parameter (indexOf)
    const index = animals.indexOf(animal);
    console.log(index);
    //make a copy of the particular object in the array, clone the movie at given location
    animal[index] = { ...animal };
    console.log("my new object", animal[index]);
    //if true => false and viceversa

    animal[index].liked = !animal[index].liked;

    this.setState({
      animals
    });
  };

  //whenever the state of a comp is changed, that comp and all its children are rerendered - the render() is called
  handlePageChange = page => {
    //console.log(page);
    this.setState({
      currentPage: page
    });
  };

  handleSpeciesSelect = species => {
    console.log("species", species);
    this.setState({
      selectedSpecies: species,
      currentPage: 1 //så att 1a sidan alltid kommer upp på alla genres
    });
  };

  handleSort = sortColumnNew => {
    this.setState({
      //setting sortColumn to an object with two props
      sortColumn: sortColumnNew
    });
  };

  getPageData = () => {
    const filtered =
      //if both selectedSpecies och selectedSpecies._id is truthy
      this.state.selectedSpecies && this.state.selectedSpecies._id
        ? /* alla m som uppfyller villkoret att id:t = id:t på selectedSpecies returneras */
          this.state.animals.filter(a => a.species._id === this.state.selectedSpecies._id)
        : this.state.animals;

    console.log("hej species", this.state.selectedSpecies);

    //måste ligga före paginate-function, men efter filter
    const sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );

    //from the paginate function
    const animals = paginate(sorted, this.state.currentPage, this.state.pageSize);

    console.log("animals", animals);
    //returns an object
    return { totalCount: filtered.length, data: animals };
  };

  render() {
    const { length: animalsCount } = this.state.animals; //=this.state.animals.length
    const { currentPage, pageSize, sortColumn } = this.state;

    // const result = this.getPageData();    //the returned value of getPageData in a const
    //to get the props we want
    const { totalCount, data: animals } = this.getPageData(); //rename data to animals

    //ALT 1:
    let textmessage;
    if (this.state.animals === 0) {
      textmessage = <p>There are no animals in the database!</p>;
    } else {
      textmessage = (
        <p>
          Showing {totalCount} animals from the database.
        </p>
      );
    }

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.species}
            /* defaultProps */
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleSpeciesSelect}
          />
        </div>
        <div className="col">
          {textmessage}
          <AnimalsTable
            animals={animals}
            /*sortColumn to show the right sort order when page is loaded */
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={animalsCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}
export default Animals;
