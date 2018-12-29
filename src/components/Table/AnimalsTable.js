import React from "react";
import Like from "./common/Like";

const AnimalsTable = props => {
  const { animals, onDelete, onLike, onSort } = props;
  return (
    <table id="animalTable" className="table">
      <thead>
        <tr>
          <th />
          <th onClick={() => onSort("name")}>Name</th>
          <th onClick={() => onSort("species.name")}>Species</th>
          <th onClick={() => onSort("shoesize")}>Shoesize</th>
          <th onClick={() => onSort("hairdo")}>Hairdo</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {animals.map(animal =>
          <tr key={animal._id}>
            <td>
              {/*  <img src={Lion} alt="" /> */}
              <img src={require(`../../img/${animal.image}.jpg`)} alt={animal.image} />
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
                onLikeToggle={() => onLike(animal)}
              />
            </td>
            <td>
              <button onClick={() => onDelete(animal)} className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default AnimalsTable;
