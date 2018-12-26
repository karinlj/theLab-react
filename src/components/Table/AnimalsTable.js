import React, { Component } from "react";
//import Table from "./common/table";
import Like from "./common/Like";
import TableHeader from "./common/TableHeader";

class AnimalsTable extends Component {
  //does not have to be in State because not changing in the lifecycle of this comp
  columns = [
    //columns with 2 empty objects for like and delete
    { path: "name", label: "Name" },
    { path: "species.name", label: "Species" },
    { path: "birthDate", label: "BirthDate" },
    { path: "gender", label: "Gender" },
    {
      key: "like"
    },
    {
      key: "delete"
    }
  ];

  render() {
    const { animals, sortColumn, onSort } = this.props;

    return (
      /* for each animal we render a row
        store the animals in an array and map each element to a tr-element 
        key attr to the element you are repeating 
        argument to know what animal is being liked
        animal.liked -  false/true
         */
      <table className="table">
        <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />

        <tbody>
          {animals.map(animal =>
            <tr key={animal._id}>
              <td>
                {animal.name}
              </td>
              <td>
                {animal.genre.name}
              </td>
              <td>
                {animal.birthDate}
              </td>
              <td>
                {animal.gender}
              </td>

              <td>
                <Like
                  liked={animal.liked}
                  onHandleLike={() => this.props.onLike(animal)}
                />
              </td>
              <td>
                <button
                  onClick={() => this.props.onDelete(animal)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
export default AnimalsTable;
