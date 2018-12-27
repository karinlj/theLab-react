import React, { Component } from "react";
import "./Table.scss";
import { getAnimals } from "./services/animalService";
import Like from "./common/Like";

class Animals extends Component {
  state = {
    animals: []
  };

  //normally calling backend service, so here the ajax calls would be
  //we set them to [] in the state while the data is being fetched for no rumtime error
  componentDidMount() {
    //new array with spread and adding new object
    //const species = [{ _id: "", name: "All species" }, ...getSpecies()];
    this.setState({
      animals: getAnimals()
      // species
    });
  }

  handleDelete = animal => {
    console.log("animal", animal);
    //new array that contains all the objects except the one we are deleting
    //keeping the all items that fullfil the condition
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

    console.log("toggle-like", animal);

    const animals = [...this.state.animals];
    const index = animals.indexOf(animal);
    console.log(index);

    animals[index] = { ...animals[index] };
    // console.log("animal at index positon", animal[index]);

    animals[index].liked = !animals[index].liked;
    this.setState({ animals });
  };

  render() {
    // console.log("animals", this.state.animals);
    /* for each animal we render a row
        store the animals in an array and map each element to a tr-element 
        key attr to the element you are repeating 
        argument to know what animal is being liked
        animal.liked -  false/true
         */

    const { animals } = this.state;
    let textmessage;
    animals === 0
      ? (textmessage = <p>There are no animals left</p>)
      : (textmessage = (
          <p>
            Showing {animals.length} animals
          </p>
        ));
    return (
      <div>
        {textmessage}

        <table id="animalTable" className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Species</th>
              <th>Shoesize</th>
              <th>Hairdo</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {animals.map(animal =>
              <tr key={animal._id}>
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
      </div>
    );
  }
}
export default Animals;
