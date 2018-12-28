import React, { Component } from "react";
import "./Table.scss";
import Sidebar from "../Sidebar";
import HeaderText from "../HeaderText";
import VideoSidebar from "../Video/VideoSidebar";
import { getAnimals } from "./services/animalService";
import { getSpecies } from "./services/speciesService";
import Like from "./common/Like";
import Pagination from "./common/Pagination";
import { paginate } from "./utilities/paginate";
import ListGroup from "./common/ListGroup";

class Animals extends Component {
  state = {
    animals: [],
    pageSize: 4,
    currentPage: 1,
    species: [],
    selectedSpecies: null
  };

  //normally calling backend service, the ajax calls would be here
  //we set them to [] in the state while the data is being fetched for no rumtime error
  componentDidMount() {
    //new array with spread and adding new object
    const species = [{ _id: "", name: "All species" }, ...getSpecies()];
    this.setState({
      animals: getAnimals(),
      species
    });
  }

  handleDelete = animal => {
    console.log("animal", animal);
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
    console.log("page changed", page);
    this.setState({ currentPage: page });
  };

  handleSpeciesSelect = species => {
    console.log("species", species);
    //putting selectedSpecies in the state and setting it to the current species
    this.setState({
      selectedSpecies: species
    });
  };

  render() {
    // console.log("animals", this.state.animals);
    /* for each animal we render a row
        store the animals in an array and map each element to a tr-element 
        key attr to the element you are repeating 
        argument to know what animal is being liked
        animal.liked -  false/true
         */

    //console.log("selectedSpecies", this.state.selectedSpecies);

    const { animals, pageSize, currentPage, species, selectedSpecies } = this.state;
    const animalsPaginated = paginate(animals, currentPage, pageSize);

    let textmessage;
    animals === 0 ? (textmessage = <p>There are no animals left</p>) : (textmessage = "");
    return (
      <div className="row">
        <div className="col-12">
          <div className="table-section">
            <header>
              <HeaderText componentName={this.constructor.name} />
            </header>

            <div className="row justify-content-between">
              <div className="col-3">
                <ListGroup
                  items={species}
                  selectedItem={selectedSpecies}
                  onItemSelect={this.handleSpeciesSelect}
                />
              </div>

              <div className="col-8">
                <div className="tableAnimals">
                  {textmessage}
                  <table id="animalTable" className="table">
                    <thead>
                      <tr>
                        <th />
                        <th>Name</th>
                        <th>Species</th>
                        <th>Shoesize</th>
                        <th>Hairdo</th>
                        <th />
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {animalsPaginated.map(animal =>
                        <tr key={animal._id}>
                          <td>
                            {/*  <img src={Lion} alt="" /> */}
                            <img
                              src={require(`../../img/${animal.image}.jpg`)}
                              alt={animal.image}
                            />
                          </td>
                          <td>
                            {animal.name}
                          </td>
                          <td>
                            {animal.species.name}
                          </td>
                          <td>
                            {animal.shoesize}
                          </td>
                          <td>
                            {animal.hairdo}
                          </td>
                          <td>
                            <Like
                              /* liked={true} */
                              liked={animal.liked}
                              onLikeToggle={() => this.handleLike(animal)}
                            />
                          </td>
                          <td>
                            <button
                              onClick={() => this.handleDelete(animal)}
                              className="btn btn-danger btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <Pagination
                    itemsTotal={animals.length}
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
                  src="https://www.youtube.com/embed/R0I0Lw3KsO0"
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
export default Animals;
